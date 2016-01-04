/* globals App: true, ExampleDefaults: true, MyTimeAxis: true */
Ext.ns('App');

Ext.Loader.setConfig({ enabled : true, disableCaching : true });
Ext.Loader.setPath('Sch', '../../js/Sch');

Ext.require([
    'Sch.panel.SchedulerGrid'
]);

Ext.onReady(function () {
    Ext.QuickTips.init();

    App.Scheduler.init();
});


App.Scheduler = {

    // Bootstrap function
    init : function () {

        this.scheduler = this.createScheduler();

        var container = new Ext.Panel({
            layout   : 'border',
            height   : ExampleDefaults.height,
            width    : ExampleDefaults.width,
            renderTo : 'example-container',
            items    : [
                this.scheduler,
                Ext.create("EventLogPanel", {
                    region    : 'south',
                    height    : 250,
                    scheduler : this.scheduler
                })
            ]
        });
    },

    renderer : function (item, resourceRec, row, col, ds) {
        var bookingStart = item.getStartDate();

        return {
            headerText : Ext.Date.format(bookingStart, "G:i"),
            footerText : item.getName()
        };
    },

    createScheduler : function () {

        var cm = new Sch.data.CrudManager({
            autoLoad      : true,
            transport     : {
                load : {
                    url : 'data.js'
                }
            }
        });

        var scheduler = Ext.create("Sch.SchedulerPanel", {
            region      : 'center',
            loadMask    : true,
            rowHeight   : 30,
            timeAxis    : new MyTimeAxis(),
            crudManager : cm,
            columns     : [
                {
                    xtype        : 'actioncolumn',
                    align        : 'center',
                    width        : 30,
                    menuDisabled : true,

                    items : [
                        {
                            icon    : 'images/delete.png',
                            tooltip : 'Delete row',
                            handler : function (grid, rowIndex, colIndex) {
                                scheduler.resourceStore.removeAt(rowIndex);
                            }
                        }
                    ]
                },
                { header : 'Staff', sortable : true, width : 130, dataIndex : 'Name' }
            ],

            // Setup view configuration
            startDate     : new Date(2011, 1, 7, 8),
            endDate       : new Date(2011, 1, 7, 18),
            viewPreset    : 'hourAndDay',
            eventRenderer : this.renderer,

            // Simple template with header and footer
            eventBodyTemplate : new Ext.Template(
                '<span class="sch-event-header">{headerText}</span>' +
                '<div class="sch-event-footer">{footerText}</div>'
            ),

            border        : true,
            tbar          : [
                {
                    iconCls : 'icon-previous',
                    scale   : 'medium',
                    handler : function () {
                        scheduler.shiftPrevious();
                    }
                },
                {
                    iconCls : 'icon-next',
                    scale   : 'medium',
                    handler : function () {
                        scheduler.shiftNext();
                    }
                },
                '->',
                {
                    iconCls      : 'unlocked',
                    scale        : 'medium',
                    text         : 'Unlocked',
                    enableToggle : true,
                    handler      : function () {
                        scheduler.setReadOnly(this.pressed);
                        this.setIconCls(this.pressed ? 'locked' : 'unlocked');
                        this.setText(this.pressed ? 'Locked' : 'Unlocked');
                    }
                }
            ]
        });

        return scheduler;
    }
};

Ext.define("EventLogPanel", {
    extend         : "Ext.TabPanel",
    activeTab      : 0,
    deferredRender : false,
    defaults       : {
        padding    : 5,
        iconCls    : 'event',
        autoScroll : true,
        tpl        : new Ext.Template(
            '<div class="evt-row">',
            '<span class="evt-time">{time}</span>',
            '<span class="evt-source">{source}</span>',
            '<span>fired</span>',
            '<span class="evt-name">{name} </span>',
            '<span>with arguments: </span>',
            '<span class="evt-args">{args}</span>',
            '</div>'
        )
    },

    initComponent : function () {

        Ext.apply(this, {
            items : [
                this.schedulerEvents = new Ext.Panel({
                    title : 'Scheduler'
                }),

                this.resourceStoreEvents = new Ext.Panel({
                    title : 'Resource store'
                }),

                this.eventStoreEvents = new Ext.Panel({
                    title : 'Event store'
                })
            ]
        });

        this.callParent(arguments);
    },

    afterRender : function() {
        var scheduler = this.scheduler;

        Ext.mixin.Observable.capture(scheduler, this.doLog, this.schedulerEvents);
        Ext.mixin.Observable.capture(scheduler.getResourceStore(), this.doLog, this.resourceStoreEvents);
        Ext.mixin.Observable.capture(scheduler.getEventStore(), this.doLog, this.eventStoreEvents);

        this.callParent(arguments);
    },

    doLog : function () {

        var printParams = function (params) {

            var print = [];

            for (var i = 0; i < params.length; i++) {

                var name  = '',
                    value = params[i];

                if (Ext.isEmpty(value) || Ext.isPrimitive(value) || Ext.isDate(value) || Ext.isSimpleObject(value)) {
                    name = params[i];
                }
                else if (Ext.isElement(value)) {
                    name = 'HTML';
                }
                else if (Ext.isArray(value)) {
                    name = '[' + printParams(value) + ']';
                }
                else if (value.$className) {
                    name = value.$className;
                }

                print.push(name);
            }

            return print.join(', ');
        };

        var args = Array.prototype.slice.call(arguments, 0);

        if (args[1] && args[1].callee) {
            args[1] = Array.prototype.splice.call(args[1], 0);
            args    = Array.prototype.concat.apply([], args);
        }

        var name   = args[0],
            params = Array.prototype.slice.call(args, 1);

        this.tpl.append(this.body, {
            time   : Ext.Date.format(new Date(), 'm:s:u'),
            source : this.title,
            name   : name,
            args   : printParams(params)
        });

        this.body.dom.scrollTop = this.body.dom.scrollHeight;
    }
});


Ext.define('MyTimeAxis', {
    extend     : "Sch.data.TimeAxis",
    continuous : false,

    generateTicks : function (start, end, unit, increment) {
        // Use our own custom time intervals
        if (unit === Sch.util.Date.HOUR) {
            var ticks = [];

            while (start < end) {
                if (start.getHours() >= 8 && start.getHours() <= 18) {
                    ticks.push({
                        start : start,
                        end   : Sch.util.Date.add(start, Sch.util.Date.HOUR, 1)
                    });
                }
                start = Sch.util.Date.add(start, Sch.util.Date.HOUR, 1);
            }
            return ticks;
        } else {
            return MyTimeAxis.superclass.generateTicks.apply(this, arguments);
        }
    }
});
