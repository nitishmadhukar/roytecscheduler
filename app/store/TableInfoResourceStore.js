Ext.define('App.store.TableInfoResourceStore', {
				extend  : 'Sch.data.ResourceStore',  
				storeId: 'tableinforesourcestore',
				
                sorters : {
                    property  : 'Name',
                    direction : "ASC"
                },
                model   : 'Sch.model.Resource',
				autoLoad: true,
				proxy: {
					type: 'ajax',
					url: 'http://roytec.herokuapp.com/api/scheduler/tables',
					reader: {
						type: 'json',
						// rootProperty: 'users'
					}
				},
				// data:[
					// {Id : 'r1', Name : 'Table1'},
            // {Id : 'r2', Name : 'Table2'},
            // {Id : 'r3', Name : 'Table3'},
            // {Id : 'r4', Name : 'Table4'},
            // {Id : 'r5', Name : 'Table5'},
            // {Id : 'r6', Name : 'Table6'},
			// {Id : 'r7', Name : 'Table7'}
				// ]
            });