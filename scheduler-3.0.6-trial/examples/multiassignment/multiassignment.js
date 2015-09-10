Ext.application({
    name               : 'Multi',
    autoCreateViewport : false,

    initDataModel : function () {
        var resourceStore   = new Sch.data.ResourceStore(),
            assignmentStore = new Sch.data.AssignmentStore(),
            eventStore      = new Sch.data.EventStore({
                resourceStore   : resourceStore,
                assignmentStore : assignmentStore
            });

        this.crudManager = Ext.create('Sch.data.CrudManager', {
            autoLoad      : true,
            resourceStore : resourceStore,
            eventStore    : eventStore,
            transport     : {
                load : {
                    method : 'GET',
                    url    : 'multiassignment.json'
                }
            },
            listeners     : {
                loadfail : this.onCrudError
            }
        });
    },

    onCrudError : function (crud, response) {
        Ext.Msg.show({
            title    : 'Error',
            msg      : "Failed to load data",
            icon     : Ext.Msg.ERROR,
            buttons  : Ext.Msg.OK,
            minWidth : Ext.Msg.minWidth
        });
    },

    launch : function () {

        this.initDataModel();

        var scheduler = new Sch.panel.SchedulerGrid({
            crudManager        : this.crudManager,
            viewPreset         : 'dayAndWeek',
            startDate          : new Date(2011, 0, 4),
            endDate            : Sch.util.Date.add(new Date(2011, 0, 4), Sch.util.Date.DAY, 30),
            rowHeight          : 45,
            enableDragCreation : true,
            multiSelect        : true,
            dragConfig         : {
                enableCopy : true
            },

            columns            : [
                { header : 'Name', sortable : true, width : 100, dataIndex : 'Name' }
            ],

            plugins : {
                ptype : 'myeditor'
            },

            dockedItems : [{
                xtype : 'toolbar',
                dock  : 'top',
                items : [{
                    text         : 'Horizontal view',
                    pressed      : true,
                    enableToggle : true,
                    toggleGroup  : 'orientation',
                    iconCls      : 'icon-horizontal',
                    handler      : function () {
                        scheduler.setOrientation('horizontal');
                    }
                }, {
                    text         : 'Vertical view',
                    enableToggle : true,
                    toggleGroup  : 'orientation',
                    iconCls      : 'icon-vertical',
                    handler      : function () {
                        scheduler.setOrientation('vertical');
                    }
                }]
            }]
        });

        var vp = new Ext.Viewport({
            items  : scheduler,
            layout : 'fit'
        });
    }
});

Ext.define('EventEditor', {
    extend : 'Sch.plugin.EventEditor',
    alias  : 'plugin.myeditor',

    width  : 300,
    height : 250,

    fieldsPanelConfig : {
        xtype : 'container',

        layout : {
            type  : 'hbox',
            align : 'stretch'
        },

        items : [
            {
                xtype      : 'container',
                autoScroll : true,
                flex       : 1,
                border     : false,
                padding    : '0 10',
                layout     : 'fit',
                items      : [{
                    xtype      : 'checkboxgroup',
                    labelAlign : 'top',
                    fieldLabel : 'Assigned Resources',
                    vertical   : true,
                    columns    : 1
                }]
            },
            {
                xtype    : 'container',
                border   : false,
                flex     : 1,
                layout   : 'anchor',
                defaults : {
                    anchor : '90%'
                },

                items : [
                    {
                        xtype      : 'textfield',
                        labelAlign : 'top',
                        name       : 'Name',
                        fieldLabel : 'Name'
                    }
                ]
            }
        ]
    },

    afterRender : function () {
        this.callParent(arguments);

        this.mon(this.schedulerView.resourceStore, {
            load        : this.loadResources,
            datachanged : this.loadResources,
            clear       : this.loadResources,

            scope : this
        });
    },

    loadResources : function () {
        var cbg           = this.down('checkboxgroup');
        var resourceStore = this.schedulerView.resourceStore;
        cbg.removeAll(true);

        cbg.add(
            Ext.Array.map(resourceStore.getRange(), function (resource) {
                return { boxLabel : resource.getName(), name : 'resource', inputValue : resource.getId() };
            })
        );
    },

    show : function () {
        this.callParent(arguments);

        var cbg = this.down('checkboxgroup');

        cbg.setValue({
            resource : Ext.Array.map(this.eventRecord.getResources(), function (resource) {
                return resource.getId();
            })
        });
    },

    onAfterSave : function (eventRecord) {
        var cbg = this.down('checkboxgroup');

        var resources = cbg.getValue().resource;
        resources = resources instanceof Array ? resources : [resources];

        eventRecord.unassign();
        eventRecord.assign(Ext.Object.getValues(resources));
    }
});
