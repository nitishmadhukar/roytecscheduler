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
						// rootProperty: 'users'
					}
				},
				                /*data  : [
                   
	 {ResourceId : 'r1', Contract : '628221', Item: 'OTHW600EL999', ContractCarletColor: 'orange', percentDone: '100', colorForPercentDone: 'green', count:'1', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,00), EndDate : new Date(2015, 7, 17, 0,20)},
	 {ResourceId : 'r1', Contract : '628221', Item: 'OTHW600DT991', ContractCarletColor: 'orange', percentDone: '100', colorForPercentDone: 'green', count:'2', time:'00:10', Arrangement:'991', StartDate : new Date(2015, 7, 17, 0,20), EndDate : new Date(2015, 7, 17, 0,30)},
	 {ResourceId : 'r1', Contract : '628221', Item: 'OTHW600DV991', ContractCarletColor: 'orange', percentDone: '85', colorForPercentDone: 'red', count:'3', time:'00:10', Arrangement:'991', StartDate : new Date(2015, 7, 17, 0,30), EndDate : new Date(2015, 7, 17, 0,40)},
	 {ResourceId : 'r1', Contract : '628224', Item: 'OTHW74APR999', ContractCarletColor: 'orange', percentDone: '40', colorForPercentDone: 'green', count:'4', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,40), EndDate : new Date(2015, 7, 17, 0,50)},
	 {ResourceId : 'r1', Contract : '628224', Item: 'OTHW74APR999', ContractCarletColor: 'orange', percentDone: '63', colorForPercentDone: 'yellow', count:'4', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,50), EndDate : new Date(2015, 7, 17, 1,00)},
	 {ResourceId : 'r1', Contract : '622381', Item: 'OTHW600DP999', ContractCarletColor: 'orange', percentDone: '40', colorForPercentDone: 'green', count:'5', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,00), EndDate : new Date(2015, 7, 17, 1,20)},
	 {ResourceId : 'r1', Contract : '622381', Item: 'OTHW600DP999', ContractCarletColor: 'orange', percentDone: '40', colorForPercentDone: 'green', count:'5', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,20), EndDate : new Date(2015, 7, 17, 1,30)},
	 {ResourceId : 'r1', Contract : '622498', Item: 'OTHW600DS999', ContractCarletColor: 'orange', percentDone: '0', colorForPercentDone: 'green', count:'6', time:'00:05', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,30), EndDate : new Date(2015, 7, 17, 1,40)},
	 {ResourceId : 'r1', Contract : '622498', Item: 'OTHW600DS999', ContractCarletColor: 'orange', percentDone: '0', colorForPercentDone: 'green', count:'6', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,40), EndDate : new Date(2015, 7, 17, 2,05)},
	 
	 {ResourceId : 'r2', Contract : '628221', Item: 'OTHW600EB999', ContractCarletColor: 'blue', percentDone: '100', colorForPercentDone: 'green', count:'7', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,00), EndDate : new Date(2015, 7, 17, 0,15)},
	 {ResourceId : 'r2', Contract : '628221', Item: 'OTHW600EP999', ContractCarletColor: 'blue', percentDone: '100', colorForPercentDone: 'green', count:'8', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,15), EndDate : new Date(2015, 7, 17, 0,28)},
	 {ResourceId : 'r2', Contract : '628221', Item: 'OTHW600FB999', ContractCarletColor: 'blue', percentDone: '60', colorForPercentDone: 'yellow', count:'9', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,28), EndDate : new Date(2015, 7, 17, 0,38)},
	 {ResourceId : 'r2', Contract : '628224', Item: 'OTHW600FB999', ContractCarletColor: 'blue', percentDone: '75', colorForPercentDone: 'yellow', count:'9', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,38), EndDate : new Date(2015, 7, 17, 0,50)},
	 {ResourceId : 'r2', Contract : '628224', Item: 'OTHW600FB999', ContractCarletColor: 'blue', percentDone: '40', colorForPercentDone: 'green', count:'9', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,50), EndDate : new Date(2015, 7, 17, 1,05)},
	 {ResourceId : 'r2', Contract : '622381', Item: 'OTHW600EB999', ContractCarletColor: 'blue', percentDone: '40', colorForPercentDone: 'green', count:'7', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,05), EndDate : new Date(2015, 7, 17, 1,18)},
	 {ResourceId : 'r2', Contract : '622381', Item: 'OTHW600EP999', ContractCarletColor: 'blue', percentDone: '81', colorForPercentDone: 'red', count:'8', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,18), EndDate : new Date(2015, 7, 17, 1,30)},
	 {ResourceId : 'r2', Contract : '622498', Item: 'OTHW600FB999', ContractCarletColor: 'blue', percentDone: '0', colorForPercentDone: 'green', count:'9', time:'00:05', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,30), EndDate : new Date(2015, 7, 17, 1,55)},
	 {ResourceId : 'r2', Contract : '622498', Item: 'OTHW600FB999', ContractCarletColor: 'blue', percentDone: '0', colorForPercentDone: 'green', count:'9', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,55), EndDate : new Date(2015, 7, 17, 2,05)},
	 
	 {ResourceId : 'r3', Contract : '628221', Item: 'OTHW600EL999', ContractCarletColor: 'lightseagreen', percentDone: '100', colorForPercentDone: 'red', count:'1', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,00), EndDate : new Date(2015, 7, 17, 0,20)},
	 {ResourceId : 'r3', Contract : '628221', Item: 'OTHW600DT991', ContractCarletColor: 'lightseagreen', percentDone: '100', colorForPercentDone: 'green', count:'2', time:'00:10', Arrangement:'991', StartDate : new Date(2015, 7, 17, 0,20), EndDate : new Date(2015, 7, 17, 0,30)},
	 {ResourceId : 'r3', Contract : '628221', Item: 'OTHW600DV991', ContractCarletColor: 'lightseagreen', percentDone: '100', colorForPercentDone: 'red', count:'3', time:'00:10', Arrangement:'991', StartDate : new Date(2015, 7, 17, 0,30), EndDate : new Date(2015, 7, 17, 0,40)},
	 {ResourceId : 'r3', Contract : '628224', Item: 'OTHW74APR999', ContractCarletColor: 'lightseagreen', percentDone: '60', colorForPercentDone: 'yellow', count:'4', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,40), EndDate : new Date(2015, 7, 17, 0,50)},
	 {ResourceId : 'r3', Contract : '628224', Item: 'OTHW600DP999', ContractCarletColor: 'lightseagreen', percentDone: '40', colorForPercentDone: 'green', count:'5', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 0,50), EndDate : new Date(2015, 7, 17, 1,00)},
	 {ResourceId : 'r3', Contract : '622381', Item: 'OTHW600DS999', ContractCarletColor: 'lightseagreen', percentDone: '92', colorForPercentDone: 'red', count:'6', time:'00:20', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,00), EndDate : new Date(2015, 7, 17, 1,20)},
	 {ResourceId : 'r3', Contract : '622381', Item: 'OTHW600EL999', ContractCarletColor: 'lightseagreen', percentDone: '0', colorForPercentDone: 'green', count:'1', time:'00:10', Arrangement:'999', StartDate : new Date(2015, 7, 17, 1,20), EndDate : new Date(2015, 7, 17, 1,30)},
	 {ResourceId : 'r3', Contract : '622498', Item: 'OTHW600DT991', ContractCarletColor: 'lightseagreen', percentDone: '0', colorForPercentDone: 'green', count:'2', time:'00:05', Arrangement:'991', StartDate : new Date(2015, 7, 17, 1,30), EndDate : new Date(2015, 7, 17, 1,42)},
	 {ResourceId : 'r3', Contract : '622498', Item: 'OTHW600DV991', ContractCarletColor: 'lightseagreen', percentDone: '0', colorForPercentDone: 'green', count:'3', time:'00:20', Arrangement:'991', StartDate : new Date(2015, 7, 17, 1,42), EndDate : new Date(2015, 7, 17, 2,05)},
	 
                ]*/
            });