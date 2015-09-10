Ext.define('App.controller.SchedulerLandingPageViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.schedulerlandingpageviewcontroller',
    init: function() {
        //
    }
});

// registerCustomPresets
Sch.preset.Manager.registerPreset("customMinuteAndDayPreSet", {
    timeResolution: {
        unit: "MINUTE",
        increment: 1
    },
    defaultSpan: 24,
    headerConfig: {
        bottom: {
            unit: "MINUTE",
            increment: 15,
            dateFormat: 'i',
            align: 'center'
        },
        middle: {
            unit: "HOUR",
            increment: 1,
            dateFormat: 'h A',
            align: 'center'
        },
        top: {
            unit: "DAY",
            increment: 1,
            dateFormat: 'd M Y',
            align: 'center'
        }
    }
});