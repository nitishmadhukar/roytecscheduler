Ext.define('App.model.ContractItemTimeElapsedEventModel', {
    extend : 'Sch.model.Event',
	fields: [
        {name: 'ResourceId',  type: 'string'},
        {name: 'Contract',   type: 'string'},
        {name: 'Item', type: 'string'},
        {name: 'count', type: 'string'},
		{name: 'time', type: 'string'},
		{name: 'Arrangement', type: 'string'},
		{name: 'StartDate', type: 'date'},
		{name: 'EndDate', type: 'date'}
    ]	 
});