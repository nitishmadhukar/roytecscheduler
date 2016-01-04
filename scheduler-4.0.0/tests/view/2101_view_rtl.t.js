StartTest(function (t) {
    Ext.define('Sch.examples.RtlComponent', {
        override : 'Ext.Component',
        rtl      : true
    });

    t.it('Locked grid should be rendered fine', function (t) {
        var s = t.getScheduler({
            width       : 500,
            height      : 200,
            startDate   : new Date(2009, 1, 1),
            endDate     : new Date(2009, 1, 4),
            resourceStore: t.getResourceStore({
                data    : [
                    { Id : 'r1', Name : 'r1' }
                ]
            }),
            eventStore  : t.getEventStore({
                data    : [
                    { Id : 1, ResourceId : 'r1', StartDate : new Date(2009, 0, 29), EndDate : new Date(2009, 1, 2), Cls : 'e1' },
                    { Id : 2, ResourceId : 'r1', StartDate : new Date(2009, 1, 3), EndDate : new Date(2009, 1, 5), Cls : 'e2' }
                ]
            }),
            renderTo    : Ext.getBody(),
            rtl         : true
        });

        t.chain(
            { waitForEventsToRender : s },
            function (next) {
                var view = s.getSchedulingView();

                var e = view.el.down('.e1');
                t.is(e.getStyle('borderRightStyle'), 'dashed', 'Right boder style is ok');
                t.is(e.getStyle('borderLeftStyle'), 'solid', 'Left boder style is ok');

                e = view.el.down('.e2');
                t.is(e.getStyle('borderRightStyle'), 'solid', 'Right boder style is ok');
                t.is(e.getStyle('borderLeftStyle'), 'dashed', 'Left boder style is ok');

                var node = s.lockedGrid.view.all.item(0);

                t.isApprox(node.getLeft(), s.lockedGrid.el.getLeft(), 1, 'Column content is synced with view');
                t.isApprox(node.getLeft() + node.getWidth(), s.lockedGrid.el.getLeft() + s.lockedGrid.el.getWidth(), 1, 'Column content is synced with view');
            }
        )
    });
});