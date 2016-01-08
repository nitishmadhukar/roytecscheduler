Ext.define('App.store.ContractItemTimeElapsedEventStore', {
				extend  : 'Sch.data.EventStore',
				requires: ['App.model.ContractItemTimeElapsedEventModel'],
                model : 'App.model.ContractItemTimeElapsedEventModel',
				storeId: 'contractitemtimeelapsedeventstore',
				autoLoad: true,
				proxy: {
					type: 'ajax',
					url: 'http://roytec.herokuapp.com/api/scheduler/',
					reader: {
						type: 'json',
						getData:function(data){
							debugger;
							for(i = 0; i < data.length; i++){
								var tempStartDate = new Date(data[i].StartDate+'Z');
								var tempEndDate = new Date(data[i].EndDate+'Z');
								data[i].StartDate = new Date(tempStartDate.getUTCFullYear(), tempStartDate.getUTCMonth(), tempStartDate.getUTCDate(), tempStartDate.getUTCHours(), tempStartDate.getUTCMinutes());
								data[i].EndDate = new Date(tempEndDate.getUTCFullYear(), tempEndDate.getUTCMonth(), tempEndDate.getUTCDate(), tempEndDate.getUTCHours(), tempEndDate.getUTCMinutes());
								
								// data[i].StartDate = new Date(tempStartDate.getFullYear(), tempStartDate.getMonth(), tempStartDate.getDate(), tempStartDate.getHours(), tempStartDate.getMinutes());
								// data[i].EndDate = new Date(tempEndDate.getFullYear(), tempEndDate.getMonth(), tempEndDate.getDate(), tempEndDate.getHours(), tempEndDate.getMinutes());
							}
							return data;
						}
						// rootProperty: 'users'
					}
				}
            });