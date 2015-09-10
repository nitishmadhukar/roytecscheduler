StartTest(function (t) {
    var scheduler;

    t.it('Should render custom time range', function (t) {
        scheduler && scheduler.destroy();

        scheduler = t.getScheduler({
            mode        : 'calendar',
            width       : 600,
            renderTo    : Ext.getBody(),
            startDate   : new Date(2014, 4, 26),
            startTime   : 10,
            endTime     : 19,
            eventStore  : t.getEventStore({
                data    : [{
                    Id          : 1,
                    StartDate   : new Date(2014, 4, 26),
                    EndDate     : new Date(2014, 4, 27),
                    Cls         : 'event1'
                }, {
                    Id          : 2,
                    StartDate   : new Date(2014, 4, 26, 9),
                    EndDate     : new Date(2014, 4, 26, 11),
                    Cls         : 'event2'
                }, {
                    Id          : 3,
                    StartDate   : new Date(2014, 4, 26, 18),
                    EndDate     : new Date(2014, 4, 26, 20),
                    Cls         : 'event3'
                }, {
                    Id          : 4,
                    StartDate   : new Date(2014, 4, 27, 15),
                    EndDate     : new Date(2014, 4, 28, 15),
                    Cls         : 'event4'
                }, {
                    Id          : 5,
                    StartDate   : new Date(2014, 4, 30, 9),
                    EndDate     : new Date(2014, 4, 30, 12),
                    Cls         : 'event5'
                }]
            })
        });

        t.chain(
            { waitForEventsToRender : scheduler },
            function (next) {
                t.is(scheduler.getStore().getCount(), 9, 'Correct amount of rows');

                var rowHeight = scheduler.timeAxisViewModel.getViewRowHeight();

                t.is(scheduler.el.down('.event1').getHeight(), 9 * rowHeight, 'Event 1 has correct height');
                t.is(scheduler.el.down('.event2').getHeight(), rowHeight, 'Event 2 has correct height');
                t.is(scheduler.el.down('.event3').getHeight(), rowHeight, 'Event 3 has correct height');

                var event4Els = scheduler.getSchedulingView().getElementsFromEventRecord(scheduler.eventStore.getAt(3));
                t.is(event4Els[0].getHeight(), 4 * rowHeight, 'First part of event 4 has correct height');
                t.is(event4Els[1].getHeight(), 5 * rowHeight, 'Last part of event 4 has correct height');

                t.selectorCountIs('.event5', 1, 'event 5 rendered correctly');

                next();
            }
        );
    });
});
