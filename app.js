Ext.ns('App');
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});
Ext.Loader.setPath('Sch', '../../js/Sch');
Ext.require([
    'app.view.SchedulerLandingPageView',
    'app.view.MinuteSchedulerGrid',
	'app.constants.Constants'
]);
Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        items: [{
            xtype: 'schedulerlandingpageview',
        }]
    });
});