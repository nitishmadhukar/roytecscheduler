/**
 * This scheduler shows the availability for each resource and allows you to modify and create new availability intervals
 * It's just a simple subclass of the plain SchedulerPanel with some extra config properties.
 */
Ext.define("MyApp.view.AvailabilityGrid", {
    extend          : "Sch.SchedulerPanel",

    // So we can use this widget via 'xtype'. For more information please see http://docs.sencha.com/ext-js/4-1/#!/api/Ext.Component
    alias           : 'widget.availabilitygrid',

    // Some configuration for the underlying Panel
    title           : 'Define the resource availability',
    cls             : 'availability-scheduler',
    split           : true,
    layout          : 'border',

    // Scheduler configs
    rowHeight       : 30,
    allowOverlap    : false,
    viewPreset      : 'hourAndDay',
    forceFit        : true,

    // Doesn't make sense to drag availability between resources, constrain it
    constrainDragToResource : true,

    viewConfig : {
        eventAnimations : true,
        barMargin       : 10
    },

    lockedGridConfig        : {
        width : 300
    },

    columns : [
        { header : 'Staff', flex : 1, dataIndex : 'Name' }
    ]
});