Ext.define('App.view.SchedulerLandingPageView', {
    extend: 'Ext.container.Container',
    alias: 'widget.schedulerlandingpageview',
	requires: ['App.controller.SchedulerLandingPageViewController'],
	controller: 'schedulerlandingpageviewcontroller',
	itemId: 'schedulerLandingPageView',
    items: [{
        xtype: 'minuteschedulergrid',
    }],
	listeners:{
		afterrender: function(){
		setInterval(function(){
		 var ContractItemTimeElapsedEventStore = Ext.getStore('contractitemtimeelapsedeventstore');
                ContractItemTimeElapsedEventStore.load({
                    callback: function(records, operation, success) {
						Ext.getBody().unmask();
                        if (success) {
							// var minuteSchedulerGrid = Ext.ComponentQuery.query('#minuteSchedulerGrid')[0];
							// minuteSchedulerGrid.switchViewPreset('customMinuteAndDayPreSet');
				// ContractItemTimeElapsedEventStore.setData();
				// var minuteSchedulerGrid = Ext.ComponentQuery.query('#minuteSchedulerGrid')[0];
				// minuteSchedulerGrid.getView.refresh();
				// minuteSchedulerGrid.destroy();
				var schedulerLandingPageView = Ext.ComponentQuery.query('#schedulerLandingPageView')[0];
							schedulerLandingPageView.removeAll();
							schedulerLandingPageView.add({
											xtype: 'minuteschedulergrid',
							});
                        } else {
                            Ext.Msg.alert('Status', 'Failure');
                        }
                    }
                });
				//alert('Hi');
	},60000);
		}
	}
});