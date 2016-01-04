describe("Drag drop sanity tests", function(t) {
    t.chain(
        { drag : "unplannedtaskgrid => .x-grid-cell:contains(Phone call)", to : '#employeescheduler-timelineview => table.x-grid-item:nth-child(2)' },

        { drag : "availabilitygrid => .x-grid-item:nth-child(1) .sch-event", by : [60, 0] }
    );
});
