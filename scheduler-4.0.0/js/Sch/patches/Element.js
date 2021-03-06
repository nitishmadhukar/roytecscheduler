/*

Ext Scheduler 4.0.0
Copyright(c) 2009-2015 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/license

*/
if (!Ext.ClassManager.get("Sch.patches.Element")) {

    Ext.define('Sch.patches.Element', {
        extend : 'Sch.util.Patch',

        requires : ['Ext.dom.Element'],

        applyFn  : function () {
            Ext.override(Ext.dom.Element, {
                // Default pxRe do not understand negative values of pixel offset.
                // This may lead to incorrect drag drop proxy position with RTL ext (covered by 012_dragdrop_rtl)
                // when view is crolled.
                pxRe    : /^-?\d+(?:\.\d*)?px$/i,
                getLocalX: function() {
                    var me = this,
                        offsetParent,
                        x = me.getStyle('left');
                    if (!x || x === 'auto') {
                        x = 0;
                    } else if (this.pxRe.test(x)) {
                        x = parseFloat(x);
                    } else {
                        x = me.getX();


                        offsetParent = me.dom.offsetParent;
                        if (offsetParent) {
                            x -= Ext.fly(offsetParent).getX();
                        }
                    }
                    return x;
                }
            });
        }
    });
}
