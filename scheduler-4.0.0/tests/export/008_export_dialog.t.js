StartTest({
    overrideSetTimeout  : false
},
function (t) {

    t.diag('Setup');
    t.expectGlobals('MyExportPlugin', 'MyExportDialog');
    t.defaultTimeout = 50000;

    Ext.define('MyExportDialog', {
        extend  : 'Sch.widget.ExportDialog',
        x       : 0,
        y       : 0,
        buildButtons : function (buttonsScope) {
            return [{
                xtype   : 'button',
                scale   : 'medium',
                cls     : 'test-export-button',
                text    : buttonsScope.exportButtonText,
                handler : function () {
                    if (this.form.isValid()) {
                        this.fireEvent('showprogressbar');
                        this.plugin.doExport(this.form.getValues());
                    }
                },
                scope   : buttonsScope
            },
            {
                xtype   : 'button',
                scale   : 'medium',
                cls     : 'test-cancel-button',
                text    : buttonsScope.cancelButtonText,
                handler : function () {
                    this.destroy();
                },
                scope   : buttonsScope
            }];
        }
    });

    Ext.define('MyExportPlugin', {
        extend                  : 'Sch.plugin.Export',
        exportDialogClassName   : 'MyExportDialog',

        onRequestSuccess : function (response) {
            var text = Ext.JSON.decode(response.responseText);

            t.pass('Request successfull.');

            if (text.success) {
                this.callParent(arguments);
            } else {
                t.fail('Export failed: ' + text.msg);
            }
        },
        onRequestFailure: function (response) {
            this.callParent(arguments);

            t.fail("Request failed.");
        }
    });

    var exportPlugin = Ext.create('MyExportPlugin', {
        printServer         : '../examples/export/server.php',
        openAfterExport     : false,
        exportDialogConfig  : {
            range               : 'date',
            showFooterField     : true,
            showColumnPicker    : true,
            showDPIField        : true
        }
    });

    var scheduler = t.getScheduler({
        renderTo : Ext.getBody(),
        plugins  : exportPlugin
    });

    t.waitForRowsVisible(scheduler, function (result) {

        var columnWidth = scheduler.getSchedulingView().timeAxisViewModel.getTickWidth();

        t.it('Test default export', function (t) {

            t.chain(
                function (next) {
                    scheduler.showExportDialog();
                    next();
                },
                { waitForSelector : '.sch-exportdialog', desc: 'Export dialog visible' },
                function (next) {
                    t.is(Ext.select('.sch-export-dialog-range .x-form-field').first().getValue(), 'Date range', 'Default dialog field value changed' );
                    next();
                },
                function (next) {
                    t.waitForEvent(exportPlugin, 'hidedialogwindow', next, null, 150000);
                    t.click('.test-export-button', function () {});
                });
        });


        t.it('Test Footer', function (t) {

            t.chain(
            function (next) {

                scheduler.showExportDialog();
                next();
            },

            { waitForSelector : '.sch-export-dialog-footer', desc: 'Export dialog visible' },

            { click : '.sch-export-dialog-footer .x-form-checkbox' },

            function (next) {
                t.waitForEvent(exportPlugin, 'hidedialogwindow', next, null, 150000);
                t.click('.test-export-button', function () {});
            });
        });

        t.it('Test date range export', function (t) {

            t.chain(
                function (next) {
                    scheduler.showExportDialog();
                    next();
                },
                { waitForSelector : '.sch-export-dialog-range' },
                { click : '.sch-export-dialog-range' },
                { click : function () { return Ext.select('.x-boundlist').first().select('.x-boundlist-item').item(0); }},

                function (next) {
                    t.waitForEvent(exportPlugin, 'hidedialogwindow', next, null, 150000);

                    t.click('.test-export-button', function () {});
                }
            );
        });

        t.it('Test current view export', function (t) {

            t.chain(
                function (next) {
                    scheduler.showExportDialog();
                    next();
                },
                { waitForSelector : '.sch-export-dialog-range' },
                { click : '.sch-export-dialog-range' },
                { click : function () { return Ext.select('.x-boundlist').first().select('.x-boundlist-item').item(2); }},
                { drag : '.x-slider-thumb', by: [-30, 0] },

                function (next) {
                    t.waitForEvent(exportPlugin, 'hidedialogwindow', next, null, 150000);

                    t.click('.test-export-button', function () {});
                }
            );
        });

        t.it('Test Columns', function (t) {

            t.chain(
                function (next) {

                    scheduler.showExportDialog();
                    next();
                },

                { waitForSelector : '.sch-export-dialog-columns', desc: 'Export dialog visible' },

                { click : '.sch-export-dialog-columns' },

                { waitForSelector : '.sch-columnpicker-list', desc: 'Combo expanded' },

                { click : '.sch-columnpicker-list .x-boundlist-item' },

                function (next) {
                    t.waitForEvent(exportPlugin, 'hidedialogwindow', next, null, 150000);
                    t.click('.test-export-button', function () {});
                });
        });

        t.it('Test DPI field', function (t) {

            scheduler.mon(exportPlugin, {
                beforeexport :  function (arg1, arg2, config) {
                   t.is(config.DPI, 80, 'DPI is passed correctly');
                   scheduler.mun(exportPlugin, 'beforeexport');
                   return false;
                }
            });

            t.chain(
                function (next) {
                    scheduler.showExportDialog();
                    next();
                },
                { waitForSelector : '.sch-export-dialog-dpi' },
                function (next) {
                    exportPlugin.win.form.dpiField.setValue(80);
                    t.click('.test-export-button', function () {});
                }
            );
        });

        t.is(scheduler.getSchedulingView().timeAxisViewModel.getTickWidth(), columnWidth, 'Column width properly restored after export');

    });
});
