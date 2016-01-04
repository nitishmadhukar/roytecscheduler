StartTest(function(t) {
    t.chain(
        { waitFor : "EventsVisible", args : [] },

        { drag : "schedulergridview => table.x-grid-item:nth-child(1) .sch-col-alt", offset : [45, 28], by : [-7, 62] },

        { click : "[itemId=resourceField] => .x-form-text", offset : [16, 14] },

        { click : "[itemId=resourceField].getPicker() => .x-boundlist-item:contains(Mike)", offset : [24, 14] },

        { click : "button[text=Save] => .x-btn-button", offset : [19, 12] },

        { click : "combo[inputType=text] => .x-form-trigger", offset : [9, 11] },

        { drag : ">>schedulergridview", offset : [231, 16], by : [-3, 36] },

        { click : "[itemId=resourceField] => .x-form-text", offset : [20, 18] },

        { click : "[itemId=resourceField].getPicker() => .x-boundlist-item:contains(Mike)", offset : [21, 6] },

        { click : "button[text=Save] => .x-btn-button", offset : [28, 12] }
    );
});
