Ext.define('App.view.SchedulerLandingPageView', {
    extend: 'Ext.container.Container',
    alias: 'widget.schedulerlandingpageview',
	requires: ['App.controller.SchedulerLandingPageViewController'],
	controller: 'schedulerlandingpageviewcontroller',
	itemId: 'schedulerLandingPageView',
    items: [{
        xtype: 'minuteschedulergrid',
    }]
});