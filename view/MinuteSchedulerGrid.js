Ext.define('App.view.MinuteSchedulerGrid', {
	extend: 'Sch.panel.SchedulerGrid',
        alias  : 'widget.minuteschedulergrid',
   	itemId: 'minuteSchedulerGrid',
        title : 'Master Panel',
	requires: ['App.controller.MinuteSchedulerGridController'],
	controller: 'minuteschedulergridcontroller',
	height            : ExampleDefaults.height,
            width             : ExampleDefaults.width,
            barMargin         : 2,
            rowHeight         : 35,
            border            : true,
            renderTo          : Ext.getBody(),
            viewPreset        : 'minuteAndHour',
			increment: 15,
			//tooltipTpl: 'Tooltip',
			tooltipTpl  :function(item, r, tplData, row){
				return this.tooltipTpl= this.Contract+"-"+this.Item+"-"+this.time;
			},
			
				eventRenderer      : function (item, r, tplData, row) {
					var minuteSchedulerGrid=Ext.ComponentQuery.query('#minuteSchedulerGrid')[0];
					var viewCell= minuteSchedulerGrid.getController().schedulerColorCoding(item, r, tplData, row);
					return viewCell;
                },
            columns           : [
                { header : 'Table', sortable : true, width : 100, dataIndex : 'Name' }
            ],
            resourceStore : Ext.create('App.store.TableInfoResourceStore'),
            eventStore    : Ext.create('App.store.ContractItemTimeElapsedEventStore')
			
});