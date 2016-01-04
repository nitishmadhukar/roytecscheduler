StartTest(function (t) {
    var colWidth,
        plugin,
        scheduler;
    
    var setup = function (config) {
        config  = config || {};
        scheduler && scheduler.destroy();
        
        plugin = new Sch.plugin.CellPlugin(config.plugin || {});
        
        scheduler = t.getScheduler(Ext.apply({
            eventStore      : t.getEventStore({}, 0),
            width       : 1000,
            height      : 500,
            startDate   : new Date(2014, 5, 12),
            endDate     : new Date(2014, 5, 12, 7),
            viewPreset  : 'hourAndDay',
            renderTo    : Ext.getBody(),
            plugins     : plugin
        }, config.scheduler || {}));
        
        colWidth    = scheduler.timeAxisViewModel.getTickWidth();
    };
    
    t.it('Should select multiple cells on click with ctrl key being hold', function (t) {
        setup({
            plugin  : {
                singleClickEditing  : false
            }
        });
        
        var getRes = function (i) { return scheduler.resourceStore.getAt(i); }; 
        
        var box, box1, boxes = [];

        // closure generator
        var editorInRow = function (index) {
            return (function (index) {
                return function () {
                    return plugin.containerEl && Math.abs(plugin.containerEl.getBox().y - t.getRow(scheduler.normalGrid, index).getBox().y) <= 2;
                }
            })(index);
        }
        
        t.chain(
            { waitForRowsVisible : scheduler },
            { click : function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [75, 13] },
            { waitFor : editorInRow(1) },
            function (next) {
                boxes.push(scheduler.el.down('.sch-cellplugin-highlighter.active').getBox());
                next();
            },
            { click : function () { return t.getRow(scheduler.normalGrid, 2); }, offset : [164, 17], options : { ctrlKey : true } },
            { waitFor : editorInRow(2) },
            function (next) {
                boxes.push(scheduler.el.down('.sch-cellplugin-highlighter.active').getBox());
                next();
            },
            { click : function () { return t.getRow(scheduler.normalGrid, 3); }, offset : [279, 17], options : { ctrlKey : true } },
            { waitFor : editorInRow(3) },
            function (next) {
                boxes.push(scheduler.el.down('.sch-cellplugin-highlighter.active').getBox());
                next();
            },
            { click : function () { return t.getRow(scheduler.normalGrid, 4); }, offset : [406, 19], options : { ctrlKey : true } },
            { waitFor : editorInRow(4) },
            function (next) {
                boxes.push(scheduler.el.down('.sch-cellplugin-highlighter.active').getBox());
                
                var cells = Ext.Array.map(scheduler.el.query('.sch-cellplugin-highlighter'), function (el) {
                    return Ext.fly(el).getBox();
                });

                Ext.Array.sort(cells, function (e1, e2) {
                    return (e1.x < e2.x || e1.y < e2.y) ? -1 : 1;
                })

                Ext.each(cells, function (box, index) {
                    t.isDeeply(box, boxes[index], 'Position is correct');
                });

                var context = plugin.selContext.concat(plugin.context);
                
                plugin.on('beforecelledit', function (plugin, selection) {
                    var item;
                    
                    for (var i = 0; i < selection.length; i++) {
                        item = selection[i];
                        t.diag('Checking selection at index ' + (i + 1));
                        t.is(item.resource, getRes(i + 1), 'Resource is correct');
                        t.is(item.startDate, new Date(2014, 5, 12, i), 'Start date is correct');
                        t.is(item.endDate, new Date(2014, 5, 12, i + 1), 'End date is correct');
                    }
                });
                
                plugin.on('completecelledit', function (plugin, value, selection) {
                    var item;
                    
                    for (var i = 0; i < selection.length; i++) {
                        item = selection[i];
                        t.diag('Checking selection at index ' + (i + 1));
                        t.is(item.resource, getRes(i + 1), 'Resource is correct');
                        t.is(item.startDate, new Date(2014, 5, 12, i), 'Start date is correct');
                        t.is(item.endDate, new Date(2014, 5, 12, i + 1), 'End date is correct');
                    }
                    t.is(value, '3-4', 'Value is correct');
                });
                
                plugin.beginEdit();
                plugin.editor.setValue('3-4');
                plugin.onEditorKeyEnter();
              
                t.is(scheduler.el.query('.sch-cellplugin-highlighter').length, 1, 'Selection removed');
            }
        );
    });
    
    t.it('Multiple selection should save box sizes', function (t) {
        setup({
            scheduler   : {
                viewPreset  : 'weekAndDay',
                eventStore  : t.getEventStore({
                    data    : [{
                        Id          : 'e1',
                        StartDate   : new Date(2014, 5, 10, 10),
                        EndDate     : new Date(2014, 5, 10, 20),
                        ResourceId  : 'r2'
                    }, {
                        Id          : 'e2',
                        StartDate   : new Date(2014, 5, 10, 11),
                        EndDate     : new Date(2014, 5, 10, 20),
                        ResourceId  : 'r2'
                    }, {
                        Id          : 'e3',
                        StartDate   : new Date(2014, 5, 11, 10),
                        EndDate     : new Date(2014, 5, 11, 20),
                        ResourceId  : 'r4'
                    }, {
                        Id          : 'e4',
                        StartDate   : new Date(2014, 5, 11, 11),
                        EndDate     : new Date(2014, 5, 11, 20),
                        ResourceId  : 'r4'
                    }]
                }),
                eventRenderer : function (eventRec, resourceRec, templateData) {
                    templateData.cls = eventRec.getId();
                }
            },
            plugin  : {
                singleClickEditing  : false
            }
        });
        
        t.chain(
            { waitForRowsVisible : scheduler },
            { click : function () { return t.getRow(scheduler.normalGrid, 0); }, offset : [174, 9] },
            { click : function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [154, 19], options : { ctrlKey : true } },
            { click : function () { return t.getRow(scheduler.normalGrid, 2); }, offset : [291, 18], options : { ctrlKey : true } },
            function (next) {
                var boxes   = scheduler.el.query('.sch-cellplugin-highlighter.clone');
                var v       = scheduler.getSchedulingView();
                
                var boxEl   = Ext.get(boxes[0]);
                t.isApprox(boxEl.getHeight(), t.getRow(scheduler.normalGrid, 0).getHeight() - 1, 1, 'Box height is correct');
                t.isApprox(boxEl.getWidth(), v.timeAxisViewModel.getTickWidth(), 1, 'Box width is correct');
                
                boxEl   = Ext.get(boxes[1]);
                var nodeEl  = v.el.down('.e1');
                t.isApprox(boxEl.getHeight(), nodeEl.getHeight(), 1, 'Box height is correct');
                t.isApprox(boxEl.getWidth(), nodeEl.getWidth(), 1, 'Box width is correct');
            }
        );
    });
    
    t.it('Should clear selection on simple cell click', function (t) {
        setup({
            plugin  : {
                singleClickEditing  : false
            }
        });
        
        t.chain(
            { waitForRowsVisible : scheduler },
            { click : function () { return t.getRow(scheduler.normalGrid, 1); }, offset : [75, 13] },
            { click : function () { return t.getRow(scheduler.normalGrid, 2); }, offset : [164, 17], options : { ctrlKey : true } },
            { click : function () { return t.getRow(scheduler.normalGrid, 3); }, offset : [279, 17], options : { ctrlKey : true } },
            { click : function () { return t.getRow(scheduler.normalGrid, 4); }, offset : [406, 19], options : { ctrlKey : true } },
            { click : function () { return t.getRow(scheduler.normalGrid, 5); }, offset : [437, 12] },
            { waitForSelectorNotFound : '.sch-cellplugin-highlighter.clone' },
            function (next) {
                t.is(scheduler.el.query('.sch-cellplugin-highlighter').length, 1, 'Selection removed');
            }
        );
    });
});