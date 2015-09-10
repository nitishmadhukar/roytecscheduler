StartTest(function (t) {

    var scheduler;

    function setup (config) {
        scheduler && scheduler.destroy();

        scheduler = t[config.tree ? "getSchedulerTree" : "getScheduler"](Ext.apply({
            renderTo   : Ext.getBody(),
            viewPreset : 'dayAndWeek',
            width      : 500,
            height     : 100,
            columns    : [
                { text : 'Name', sortable : true, width : 100, dataIndex : 'Name' },
                { text : 'Foo', sortable : true, width : 200, dataIndex : 'Foo' },
                { text : 'Bar', sortable : true, width : 50, dataIndex : 'Bar' }
            ]
        }, config));
    }

    function doTest(t, config) {

        t.chain(
            {
                waitFor : 'RowsVisible',
                args    : scheduler
            },
            function (next) {
                // Make sure things work as expected after a view change
                scheduler.switchViewPreset('monthAndYear');

                t.willFireNTimes(scheduler, 'columnresize', 2, 'columnresize event should bubble');

                next()
            },
            {
                drag   : '>>[text=Foo]',
                offset : [0, 10],
                by     : [50, 0]
            },
            function (next) {
                t.isApprox(t.cq1('[text=Name]').getWidth(), 150, 1, 'Column correctly resized 1st time');

                next()
            },
            {
                // we can't start drag from exactly the same point where previous drag has stopped
                // (bug or "feature" in Ext?) so we need to move cursor on additional 1px
                drag   : '>>[text=Foo]',
                offset : [0, 11],
                by     : [-50, 0]
            },
            function () {
                t.isApprox(t.cq1('[text=Name]').getWidth(), 100, 1, 'Column correctly resized 2nd time');
            }
        )
    }

    t.it('Plain scheduler grid', function (t) {
        setup({});
        doTest(t)
    })

    t.it('Scheduler tree', function (t) {
        setup({ tree : true });
        doTest(t)
    })

    t.it('Scheduler tree fixed locked width', function (t) {
        setup({
            tree             : true,
            layout           : 'border',
            lockedGridConfig : {
                width : 300
            }
        });

        doTest(t)
    })
});
