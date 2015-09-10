StartTest(function (t) {
    var plug = new Sch.plugin.TreeCellEditing();
    var field = new Ext.form.TextField({
        setTask : function(rec) {
            this.task = rec;
        },

        getValue : function() {
            return 'foo';
        },

        applyChanges : function() {
            field.called = true;
        }
    });

    var scheduler = t.getScheduler({
        renderTo   : Ext.getBody(),
        plugins    : plug,
        columns    : [
            {
                dataIndex : 'Name', // Should never be used
                editor : field
            }
        ]
    });


    t.it('Should call setTask in editor start, and use getValue on the Field - not read the dataIndex value on the model', function (t) {

        t.chain(
            { waitForRowsVisible : scheduler },

            function(next) {
                plug.startEdit(0, 0);

                next();
            },

            { waitFor : function() { return plug.getActiveEditor(); } },

            function(next) {
                t.is(field.inputEl.dom.value, 'foo');
                t.is(field.task, scheduler.resourceStore.first(), 'setTask correctly called');

                plug.completeEdit();

                t.ok(field.called, 'applyChanges correctly called');

                next();
            }
        )
    });
});