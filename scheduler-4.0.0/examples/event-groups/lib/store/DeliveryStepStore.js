Ext.define('App.store.DeliveryStepStore', {
    extend : 'Sch.data.ResourceStore',
    model  : 'App.model.DeliveryStep',

    proxy : {
        url    : 'data.js',
        type   : 'ajax',
        reader : {
            type         : 'json',
            rootProperty : 'deliverySteps'
        }
    }
});
