StartTest(function (t) {
    var s;

    Ext.define('Sch.examples.RtlComponent', {
        override : 'Ext.Component',
        rtl      : true
    });
    
    t.it('Should align proxy correctly', function (t) {
        s && s.destroy();
        
        s = t.getScheduler({
            renderTo    : Ext.getBody(),
            rtl         : true,
            eventRenderer : function (item, r, tplData, row) {
                tplData.cls = "event-" + r.getId();
                return item.get('Name');
            }
        });

        t.chain(
            { waitForEventsToRender : s },

            { action : 'drag', target : '.event-r1', by : [10, 1], dragOnly : true },

            function (next) {
                var query = s.el.query('.event-r1');
                var proxy = Ext.getBody().down('.sch-dd-ref');
                var eventEl = Ext.fly(query[1]);
                
                t.isApprox(proxy.getLeft(), eventEl.getLeft(), 10, 'Proxy left is correct');
                t.isApprox(proxy.getY(), eventEl.getY(), 1, 'Proxy top is correct');
                next();
            },
            { action : 'mouseup' }
        );
    });

    t.it('Should scroll view when drag to edge', function (t) {
        s && s.destroy();

        s = t.getScheduler({
            renderTo    : Ext.getBody(),
            rtl         : true,
            resourceStore   : t.getResourceStore({
                data    : [{ Id : 'r1', Name : 'Albert' }]
            }),
            eventStore      : t.getEventStore({}, 1)
        });

        var view = s.getSchedulingView();
        var scrollWidth = view.el.dom.scrollWidth;

        t.chain(
            { waitForEventsToRender : s },
            { drag : '.sch-event', toOffset : [3, 10], to : view, dragOnly : true },
            { waitFor : function () {
                return view.getScroll().left + view.getWidth() === scrollWidth;
            }},
            function (next) {
                var position = s.el.down('.sch-event.sch-dd-ref').getX();
                t.ok(position < view.el.getX(), 'Proxy positioned correctly');
                next();
            },
            { moveMouseTo : view, offset : ['100%-3', 10] },
            { waitFor : function () {
                // in RTL scroll on component contain inverted value
                return view.getScroll().left === 0;
            }},
            function (next) {
                var el = s.el.down('.sch-event.sch-dd-ref');
                var viewRight = view.el.getX() + view.el.getWidth();
                t.ok(el.getX() < viewRight && el.getX() + el.getWidth() > viewRight, 'Proxy positioned correctly');
                next();
            },
            { action : 'mouseup' }
        )
    });

    t.it('Should align proxy correctly when view scrolled', function (t) {
        s && s.destroy();

        s = t.getScheduler({
            renderTo    : Ext.getBody(),
            rtl         : true,
            eventRenderer : function (item, r, tplData, row) {
                tplData.cls = "event-" + r.getId();
                return item.get('Name');
            }
        });

        var position;

        t.chain(
            { waitForEventsToRender : s },
            function (next) {
                s.getSchedulingView().scrollBy(1000);
                next();
            },
            { drag : '.event-r5', by : [-100, 0] },
            function (next) {
                position = s.el.down('.event-r5').getX();
                next();
            },
            { drag : '.event-r5', by : [-20, 0], dragOnly : true},
            function (next) {
                var currentPosition = s.el.down('.event-r5.sch-dd-ref').getX();
                t.isApprox(currentPosition, position, 25, '');
                next();
            },
            { action : 'mouseup' }
        );
    });

    t.it('Drag and drop with showExactDropPosition w/o snapRelativeToEventStartDate (horizontal)', function (t) {
        s && s.destroy();
        
        s = t.getScheduler({
            renderTo       : Ext.getBody(),
            startDate      : new Date(2011, 0, 3),
            viewPreset  : 'hourAndDay',
            rtl         : true,
            eventStore  : Ext.create('Sch.data.EventStore', {
                data : [{
                    Id      : 1,
                    Name    : 'Event',
                    ResourceId  : 'r1',
                    StartDate   : new Date(2011, 0, 3, 4, 13, 18),
                    EndDate     : new Date(2011, 0, 3, 6)
                }]
            }),
            dragConfig  : { showExactDropPosition : true }
        });
        
        var tickWidth   = s.getSchedulingView().timeAxisViewModel.getTickWidth();
        var record      = s.eventStore.getAt(0);

        t.chain(
            { waitForRowsVisible : s },

            { drag : '.sch-event', by : [0.2 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 4), 'Event hasn\'t changed place');
                next();
            },
            { drag : '.sch-event', by : [0.5 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 3, 30), 'Event changed place');
                next();
            },
            { drag : '.sch-event', by : [0.2 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 3, 30), 'Event hasn\'t changed place');
                next();
            }
        );
    });
    
    t.it('Drag and drop with showExactDropPosition w/ snapRelativeToEventStartDate (horizontal)', function (t) {
        s && s.destroy();
        
        s = t.getScheduler({
            renderTo       : Ext.getBody(),
            startDate      : new Date(2011, 0, 3),
            viewPreset  : 'hourAndDay',
            rtl         : true,
            eventStore  : Ext.create('Sch.data.EventStore', {
                data : [{
                    Id      : 1,
                    Name    : 'Event',
                    ResourceId  : 'r1',
                    StartDate   : new Date(2011, 0, 3, 4, 13, 18),
                    EndDate     : new Date(2011, 0, 3, 6)
                }]
            }),
            dragConfig  : { showExactDropPosition : true },
            snapRelativeToEventStartDate    : true
        });
        
        var tickWidth   = s.getSchedulingView().timeAxisViewModel.getTickWidth();
        var record      = s.eventStore.getAt(0);

        t.chain(
            { waitForRowsVisible : s },

            { drag : '.sch-event', by : [-0.2 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 4, 13, 18), 'Event hasn\'t changed place');
                next();
            },
            { drag : '.sch-event', by : [-0.5 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 4, 43, 18), 'Event changed place');
                next();
            },
            { drag : '.sch-event', by : [-0.2 * tickWidth, 0] },
            function (next) {
                t.is(record.getStartDate(), new Date(2011, 0, 3, 4, 43, 18), 'Event hasn\'t changed place');
                next();
            }
        );
    });
});