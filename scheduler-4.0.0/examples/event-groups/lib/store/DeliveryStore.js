Ext.define('App.store.DeliveryStore', {
    extend : 'Ext.data.Store',

    model : 'App.model.Delivery',

    taskStore         : null,
    deliveryStepStore : null,

    constructor : function () {
        this.callParent(arguments);
        this.taskStore.setDeliveryStore(this);
    },

    proxy : {
        url    : 'data.js',
        type   : 'ajax',
        reader : {
            type         : 'json',
            rootProperty : 'deliveries'
        }
    }
});
