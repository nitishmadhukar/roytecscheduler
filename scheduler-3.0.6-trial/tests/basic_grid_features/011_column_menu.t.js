describe('Should not show lock/unlock options for locked grid columns', function (t) {
    var scheduler;

    // http://www.sencha.com/forum/showthread.php?274441-Locked-grouped-grid-doesn-t-respect-lockable-attribute-of-column&p=1005556#post1005556
    function doTest(name, cfg, assertFn) {

        t.it(name, function(t) {
            scheduler && scheduler.destroy();

            scheduler = t.getScheduler(Ext.apply({
                renderTo : Ext.getBody(),
                height   : 120,
                columns  : [
                    { header : 'Name', sortable : true, width : 100, dataIndex : 'Name'}
                ]
            }, cfg));

            t.chain(
                { click : '>>[text=Name]', offset : ['100%-3', '50%'] },

                function (next) { assertFn(t); next(); },

                { click : Ext.getBody() }
            )
        })
    }

    doTest('basic', null, function (t) {
        t.cqNotExists('menuitem[text=Lock]{isVisible()}')
    });

    doTest('grouping', {
        features : [
            {
                ftype              : 'grouping',
                hideGroupedHeader  : false,
                startCollapsed     : true,
                enableGroupingMenu : true
            }
        ]
    },function (t) {
        t.cqNotExists('[text*=Lock]{isVisible()}', 'Should not find Lock option')
        t.cqExists('[text*=Group]{isVisible()}', 'Should find Grouping option')
    })
});
