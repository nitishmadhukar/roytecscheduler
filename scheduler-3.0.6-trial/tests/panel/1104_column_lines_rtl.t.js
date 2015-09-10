StartTest(function (t) {
    // To workaround http://www.sencha.com/forum/showthread.php?299143-RTL-flag-not-propagated-to-child-components&p=1092329#post1092329
    Ext.define('Sch.examples.RtlComponent', {
        override : 'Ext.Component',
        rtl      : true
    });

    var s1 = t.getScheduler({
        height      : 200,
        width       : 600,
        viewPreset  : 'hourAndDay',
        startDate   : new Date(2010, 1, 1),
        endDate     : new Date(2010, 1, 1, 10),
        columnLines : true,
        rtl         : true,
        renderTo    : Ext.getBody()
    });

    function verify() {
        var lines = Ext.select('.sch-column-line');
        var colWidth = s1.timeAxisViewModel.getTickWidth();

        t.is(lines.first().getStyle('right'), colWidth + 'px', 'First column line right style ok');
        t.is(lines.last().getStyle('right'), colWidth * 9 + 'px', 'Last column line right style ok');

        t.is(s1.normalGrid.view.el.dom.scrollLeft, s1.normalGrid.headerCt.el.dom.scrollLeft, 'Scroll synced between header and body');

        t.is(s1.el.down('.sch-secondary-canvas').el.getStyle('right')[0], "0", 'Secondary canvas right position');
        t.isApprox(s1.normalGrid.view.el.down('.x-grid-item-container').dom.clientWidth,
            s1.normalGrid.headerCt.el.down('.x-column-header').dom.clientWidth,
            1,
            'Grid view and header equally sized');
    }

    t.chain(
        { waitForSelector : '.sch-column-line' },

        { waitFor : 100 },

        function (next) {
            t.cqNotExists('schedulergrid [rtl!=true]', 'Should not find LTR components')
            verify();

            s1.getSchedulingView().el.dom.scrollLeft = 100;
            next();

        },

        { waitFor : function() {

            return s1.getSchedulingView().el.dom.scrollLeft === s1.normalGrid.headerCt.el.dom.scrollLeft;
        }},

        function (next) {
            verify();
        }
    );
})    

