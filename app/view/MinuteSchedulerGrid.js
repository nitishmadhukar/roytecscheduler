Ext.define('App.view.MinuteSchedulerGrid', {
    extend: 'Sch.panel.SchedulerGrid',
    alias: 'widget.minuteschedulergrid',
    itemId: 'minuteSchedulerGrid',
    title: 'Scheduler',
	align: 'center',
    requires: ['App.controller.MinuteSchedulerGridController'],
    controller: 'minuteschedulergridcontroller',
    height: ExampleDefaults.height,
    // width: ExampleDefaults.width,
    barMargin: 2,
    rowHeight: 35,
    border: true,
    renderTo: Ext.getBody(),
    viewPreset: 'customMinuteAndDayPreSet',
	
	// constrainDragToResource: true,
	
    // viewPreset        : 'minuteAndHour',
    /*tooltipTpl: function(item, r, tplData, row) {
        return this.tooltipTpl = this.Contract + "-" + this.Item + "-" + this.time;
    },*/
    eventRenderer: function(item, r, tplData, row) {
        var minuteSchedulerGrid = Ext.ComponentQuery.query('#minuteSchedulerGrid')[0];
        var viewCell = minuteSchedulerGrid.getController().schedulerColorCoding(item, r, tplData, row);
        return viewCell;
    },
    columns: [{
        header: 'Table',
        sortable: true,
        width: 100,
        dataIndex: 'Name'
    }],
    resourceStore: Ext.create('App.store.TableInfoResourceStore'),
    eventStore: Ext.create('App.store.ContractItemTimeElapsedEventStore'),
	
	listeners:
	{
		eventresizeend: 'SubmitDataToServerOnResizeEnd',
		eventdrop: 'submitDataToServerOnDrop',
		afterrender: function(){
		setInterval(function(){
		 var ContractItemTimeElapsedEventStore = Ext.getStore('contractitemtimeelapsedeventstore');
                ContractItemTimeElapsedEventStore.load({
                    callback: function(records, operation, success) {
						Ext.getBody().unmask();
                        if (success) {
							var schedulerLandingPageView = Ext.ComponentQuery.query('#schedulerLandingPageView')[0];
							schedulerLandingPageView.removeAll();
							// var minuteSchedulerGrid=Ext.create('App.view.MinuteSchedulerGrid');
							schedulerLandingPageView.add({
								items: [{
											xtype: 'minuteschedulergrid',
										}
									]
							});
							
							//schedulerLandingPageView.add(minuteSchedulerGrid);
                        } else {
                            Ext.Msg.alert('Status', 'Failure');
                        }
                    }
                });
				//alert('lkj');
	},60000);
		}
	}
});