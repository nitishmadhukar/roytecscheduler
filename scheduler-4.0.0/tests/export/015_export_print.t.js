StartTest(function (t) {

    t.describe('TimeAxis alignment should be correct on first export/print run', function (t) {

        var scheduler = t.cq1('schedulergrid');

        var plugin    = scheduler.getPlugin('printable');

        plugin.autoPrintAndClose = false;

        var doExport = function (next) {

            var async = t.beginAsync(45000);

            plugin.doExport({
                format      : 'A4',
                orientation : 'portrait',
                range       : 'complete',
                exporterId  : 'multipage'
            }, function (exported) {

                t.endAsync(async);

                var win         = plugin.printWindow,
                    doc         = win.document;

                var headerRowCt = doc.querySelector('.sch-header-row-middle '),
                    columns     = t.$('.sch-column-header', headerRowCt);

                var cellWidth = parseInt(columns[0].style.width, 10);
                t.is(cellWidth, 125, 'TimeAxis column has correct width');
                win.close();
                next();
            });

        };


        t.waitForRowsVisible(scheduler, function () {

            t.chain(
                doExport,
                doExport
            );

        });
    });


});