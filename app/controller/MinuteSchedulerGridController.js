Ext.define('App.controller.MinuteSchedulerGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.minuteschedulergridcontroller',
    init: function() {
        //
    },
    schedulerColorCoding: function(item, r, tplData, row) {
        var bgColor = App.constants.Constants.schedulerDefaultEventColor;
        tplData.style = "background-color:" + bgColor;
        tplData.iconCls = 'Schcontract';
        var contract = item.get('Contract');
        var contractItem = item.get('Item');
        var percentDone = item.get('percentDone');
        var colorForPercentDone = item.get('colorForPercentDone');
        var ContractCarletColor = item.get('ContractCarletColor');
        var displayTask = contract + '<br/>' + contractItem.slice(-6);
        var testPercentDone;
        if (parseFloat(percentDone) < 100) {
            testPercentDone = '<div style="width:' + percentDone + '%; background-color:' + colorForPercentDone + ' " class="displaytask">' + displayTask + '</div>'
        } else {
            testPercentDone = '<div style="background-color:' + ContractCarletColor + '" class="displaytask">' + displayTask + '</div>'
        }

        return testPercentDone;
    },
    SubmitDataToServerOnResizeEnd: function(scheduler, record, eOpts) {
        this.makeServerCallAndReRenderGrid(record);
    },
    submitDataToServerOnDrop: function(scheduler, records, isCopy, eOpts) {
        if (!Ext.isEmpty(records)) {
            this.makeServerCallAndReRenderGrid(records[0]);
        }
    },
    makeServerCallAndReRenderGrid: function(changedRecord) {
        var resourceId = changedRecord.data.ResourceId;
        var contractNumber = changedRecord.data.Contract;
        var itemPartNumber = changedRecord.data.Item;
        //var startTime = changedRecord.data.StartDate.toGMTString();
		var startTime = App.constants.Constants.convertDateToSpecifiDate(changedRecord.data.StartDate);
       // var endTime = changedRecord.data.EndDate.toGMTString();
	   var endTime = App.constants.Constants.convertDateToSpecifiDate(changedRecord.data.EndDate);
        var tableInfoResourceStore = Ext.getStore('tableinforesourcestore');
        var tableId = tableInfoResourceStore.findRecord('Id', resourceId).data.Name;
        var updateDataURL = 'http://roytec.herokuapp.com/api/scheduler/assign-item' + '?' + 'table_name=' + tableId + '&contract_number=' + contractNumber + '&item_part_number=' + itemPartNumber + '&start_time=' + startTime + '&end_time=' + endTime;
		Ext.getBody().mask('Please wait...');
        Ext.Ajax.request({
            url: updateDataURL,
            method: 'POST',
            success: function(response) {
				// Ext.getBody().unmask();
				var responseData = JSON.parse(response.responseText);
				// var ContractItemTimeElapsedEventStore = Ext.getStore('contractitemtimeelapsedeventstore');
				// ContractItemTimeElapsedEventStore.setData(responseData);
				var ContractItemTimeElapsedEventStore = Ext.getStore('contractitemtimeelapsedeventstore');
                ContractItemTimeElapsedEventStore.load({
                    callback: function(records, operation, success) {
						Ext.getBody().unmask();
                        if (success) {
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
            },
            failure: function(error) {
                Ext.Msg.alert('Status', 'Failure');
            }
        });
    }
	
});