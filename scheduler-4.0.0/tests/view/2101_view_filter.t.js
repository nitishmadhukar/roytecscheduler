StartTest(function (t) {
    t.it('View should not render filtered events', function (t) {
        var scheduler = t.getScheduler({
            renderTo : Ext.getBody()
        });

        t.waitForEventsToRender(scheduler, function () {
            scheduler.eventStore.filter(function (record) {
                return false;
            });

            t.is(scheduler.eventStore.getCount(), 0, 'All events are filtered');
            t.selectorNotExists('.sch-event', 'Events are filtered');

            scheduler.destroy();
        });
    });

    t.it('View should not render filtered events (multiassignment)', function (t) {
        var resourceStore = new Sch.data.ResourceStore({
            data    : [{ Id : 'r1', Name : 'Albert' }]
        });

        var scheduler     = t.getScheduler({
            renderTo      : Ext.getBody(),
            resourceStore : resourceStore,
            eventStore    : t.getEventStore({
                assignmentStore : new Sch.data.AssignmentStore({
                    data : [{ EventId : 1, ResourceId : 'r1' }]
                }),
                resourceStore   : resourceStore,
                data            : [{ Id : 1, StartDate : new Date(2011, 0, 4), EndDate : new Date(2011, 0, 5) }]
            })
        });

        t.waitForEventsToRender(scheduler, function () {
            scheduler.eventStore.assignmentStore.filter(function (record) {
                return false;
            });

            t.selectorNotExists('.sch-event', 'Events are filtered');
        });
    });
});