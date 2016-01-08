Ext.ns('App');
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});
Ext.Loader.setPath('Sch', '../../js/Sch');
Ext.require([
    'App.view.SchedulerLandingPageView',
    'App.view.MinuteSchedulerGrid',
	'App.constants.Constants'
]);
Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        items: [{
            xtype: 'schedulerlandingpageview'
        }]
    });
});