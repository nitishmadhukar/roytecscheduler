/* global TestCrudManager1,TestCrudManager2 */
StartTest(function(t) {

    // Checks that CRUD manager can retrieve storeId value from other properties

    t.it('CrudManager can use any store property as storeId', function (t) {

        t.it('defined on prototype', function (t) {

            t.expectGlobal('TestCrudManager1');

            Ext.define('TestCrudManager1', {
                extend          : 'Sch.data.CrudManager',
                storeIdProperty : 'oops'
            });

            var resourceStore   = t.getResourceStore({ oops : 'res' }),
                eventStore      = t.getEventStore({ oops : 'eve' });

            var crud            = new TestCrudManager1({
                stores          : ['resources', 'events']
            });

            t.is(crud.stores.length, 2, 'proper number of stores');
            t.is(crud.getStore('res'), resourceStore, 'resourceStore found');
            t.is(crud.getStore('eve'), eventStore, 'eventStore found');
            t.is(crud.stores[0].store, resourceStore, 'resourceStore is 0th');
            t.is(crud.stores[1].store, eventStore, 'eventStore is 1st');

            Ext.destroy(resourceStore, eventStore);
        });

        t.it('defined on instance', function (t) {

            var resourceStore   = t.getResourceStore({ oops : 'res' }),
                eventStore      = t.getEventStore({ oops : 'eve' });

            var crud            = new Sch.data.CrudManager({
                stores          : ['resources', 'events'],
                storeIdProperty : 'oops'
            });

            t.is(crud.stores.length, 2, 'proper number of stores');
            t.is(crud.getStore('res'), resourceStore, 'resourceStore found');
            t.is(crud.getStore('eve'), eventStore, 'eventStore found');
            t.is(crud.stores[0].store, resourceStore, 'resourceStore is 0th');
            t.is(crud.stores[1].store, eventStore, 'eventStore is 1st');

            Ext.destroy(resourceStore, eventStore);
        });

    });

    t.it('CrudManager takes into account storeIdProperty on a store', function (t) {

        t.expectGlobal('TestCrudManager2');

        Ext.define('TestCrudManager2', {
            extend          : 'Sch.data.CrudManager',
            storeIdProperty : 'oops'
        });

        var resourceStore   = t.getResourceStore({ oops : 'res' }),
            eventStore      = t.getEventStore({ foo : 'eve', storeIdProperty : 'foo' });

        var crud            = new TestCrudManager2({
            stores          : ['resources', 'events']
        });

        t.is(crud.stores.length, 2, 'proper number of stores');
        t.is(crud.getStore('res'), resourceStore, 'resourceStore found');
        t.is(crud.getStore('eve'), eventStore, 'eventStore found');
        t.is(crud.stores[0].store, resourceStore, 'resourceStore is 0th');
        t.is(crud.stores[1].store, eventStore, 'eventStore is 1st');

        Ext.destroy(resourceStore, eventStore);

    });

});
