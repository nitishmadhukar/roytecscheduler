StartTest(function (t) {
    t.it('Providing custom text to hover tip is easy', function (t) {
        var scheduler = t.getScheduler({
            renderTo    : Ext.getBody(),
            createConfig : { 
                hoverTip    : {
                    getText : function () {
                        return 'My tip' ;  
                    }
                }
            }
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            { moveCursorTo : '.sch-timetd', offset : [20, 5] },
            
            { waitFor : 'componentVisible', args : '[bodyCls=sch-hovertip]' },
            
            function (next) {
                var tipEl = Ext.getBody().down('.sch-hovertip');
                t.contentLike(tipEl, 'My tip', 'Tooltip template works correct');
                
                scheduler.destroy();
            }            
        );
    });
    
    t.it('Hover tip can be created with xtype', function (t) {
        Ext.define('Sch.tooltip.MyTip', {
            extend  : 'Sch.tooltip.HoverTip',
            
            alias   : 'widget.mytip',
            
            bodyCls : 'sch-mytestclass'
        });
        
        var scheduler = t.getScheduler({
            renderTo    : Ext.getBody(),
            createConfig : { 
                hoverTip    : {
                    xtype : 'mytip',
                    getText : function () {
                        return 'My tip1';  
                    }
                }
            }
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            { moveCursorTo : '.sch-timetd', offset : [30, 5] },
            function (next) {
                t.ok(t.cq1('[bodyCls=sch-mytestclass]'), 'hover tip instantiated');
                
                var tipEl = Ext.getBody().down('.sch-mytestclass');
                t.contentLike(tipEl, 'My tip1', 'Tooltip template works correct');
                
                scheduler.destroy();
            }
        );
    });
});