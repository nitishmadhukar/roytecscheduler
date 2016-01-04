StartTest(function (t) {
    var setup = function (config) {
        config = config || {};

        var plugin = new Sch.plugin.CellPlugin(Ext.apply(config.plugin || {}, {
            pluginId : 'cellplugin'
        }));

        return t.getScheduler(Ext.apply({
            eventStore      : t.getEventStore({}, 0),
            width       : 1000,
            height      : 500,
            startDate   : new Date(2014, 5, 12),
            endDate     : new Date(2014, 5, 12, 7),
            viewPreset  : 'hourAndDay',
            renderTo    : Ext.getBody(),
            plugins     : plugin
        }, config.scheduler || {}));
    };

    t.it('Selection-related event arguments are correct', function (t) {
        var scheduler = setup();

        var plugin = scheduler.getPlugin('cellplugin');

        t.chain(
            function (next) {
                plugin.on('beforeselect', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r3', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 1), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 2), 'End date is correct');
                }, this, { single : true });

                plugin.on('select', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r3', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 1), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 2), 'End date is correct');
                }, this, { single : true });

                plugin.on('selectionchange', function (view, selection) {
                    t.isDeeply(selection, [{
                        startDate   : new Date(2014, 5, 12, 1),
                        endDate     : new Date(2014, 5, 12, 2),
                        resource    : scheduler.resourceStore.getAt(2)
                    }], 'Selection is correct');
                }, this, { single : true });

                t.waitForEvent(plugin, 'selectionchange', next);
                t.click(t.getRow(scheduler.normalGrid, 2), false, false, false, [195, 16]);
            },
            function (next) {
                plugin.on('beforeselect', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r4', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 1), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 2), 'End date is correct');
                }, this, { single : true });

                plugin.on('select', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r4', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 1), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 2), 'End date is correct');
                }, this, { single : true });

                plugin.on('selectionchange', function (view, selection) {
                    t.isDeeply(selection, [{
                        startDate   : new Date(2014, 5, 12, 1),
                        endDate     : new Date(2014, 5, 12, 2),
                        resource    : scheduler.resourceStore.getAt(3)
                    }], 'Selection is correct');
                }, this, { single : true });

                t.waitForEvent(plugin, 'selectionchange', next);
                t.click(t.getRow(scheduler.normalGrid, 3), false, false, false, [195, 14]);
            },
            function (next) {
                plugin.on('beforeselect', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r5', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 2), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 3), 'End date is correct');
                }, this, { single : true });

                plugin.on('select', function (view, resource, startDate, endDate) {
                    t.is(resource.getId(), 'r5', 'Resource is correct');
                    t.is(startDate, new Date(2014, 5, 12, 2), 'Start date is correct');
                    t.is(endDate, new Date(2014, 5, 12, 3), 'End date is correct');
                }, this, { single : true });

                plugin.on('selectionchange', function (view, selection) {
                    t.isDeeply(selection, [{
                        startDate   : new Date(2014, 5, 12, 1),
                        endDate     : new Date(2014, 5, 12, 2),
                        resource    : scheduler.resourceStore.getAt(3)
                    }, {
                        startDate   : new Date(2014, 5, 12, 2),
                        endDate     : new Date(2014, 5, 12, 3),
                        resource    : scheduler.resourceStore.getAt(4)
                    }], 'Selection is correct');
                }, this, { single : true });

                t.waitForEvent(plugin, 'selectionchange', next);
                t.click(t.getRow(scheduler.normalGrid, 4), false, false, { ctrlKey : true }, [309, 18]);
            },
            function (next) {
                scheduler.destroy();
            }
        );
    });

    t.it('Should cancel selection', function (t) {
        var scheduler = setup({
            plugin  : {
                singleClickEditing : false
            }
        });

        var plugin = scheduler.getPlugin('cellplugin');

        t.chain(
            function (next) {
                plugin.on('beforeselect', function () { return false; }, this, { single : true });
                plugin.on('beforecelledit', function () { return false; }, this, { single : true });
                plugin.on('beforecompletecelledit', function () { return false; }, this, { single : true });
                next();
            },
            { click: function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [156, 20] },
            function (next) {
                t.notOk(plugin.containerEl, 'Selection change cancelled');
                t.waitForEvent(plugin, 'selectionchange', next);
                t.click(t.getRow(scheduler.normalGrid, 1), null, null, { offset : [156, 20] });
            },
            function (next) {
                plugin.beginEdit();
                t.notOk(plugin.editor.isVisible(), 'Begin edit is cancelled');
                plugin.beginEdit();
                t.ok(plugin.editor.isVisible(), 'Begin edit is not cancelled');
                plugin.completeEdit();
                t.ok(plugin.editor.isVisible(), 'Complete edit is cancelled');
                plugin.completeEdit();
                t.notOk(plugin.editor.isVisible(), 'Complete edit is not cancelled');
                scheduler.destroy();
            }
        );
    });

    t.it('Should distinguish click and double click', function (t) {
        // to make test stabe make plugin to think two clicks within
        // 2 seconds is 1 doubleclick
        var dblClickTimeout = 2000;

        var scheduler = setup({
            plugin  : {
                dblClickTimeout : dblClickTimeout
            }
        });

        var plugin = scheduler.getPlugin('cellplugin');

        t.willFireNTimes(plugin, 'cellclick', 1);
        t.willFireNTimes(plugin, 'celldblclick', 1);
        t.wontFire(plugin, 'beforeselect');

        t.chain(
            function (next) {
                plugin.on('cellclick', function () { return false; }, this, { single : true });
                plugin.on('celldblclick', function () { return false; }, this, { single : true });

                next();
            },
            { click: function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [156, 20] },
            { waitFor : dblClickTimeout },
            { dblclick: function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [156, 20] },
            function (next) {
                scheduler.destroy();
            }
        );
    });
});