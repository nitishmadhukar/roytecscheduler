StartTest(function (t) {

    t.it('Partner timeline panel should share timeAxis and timelineViewModel', function (t) {
        var scheduler = t.getScheduler({
            renderTo   : Ext.getBody(),
            viewConfig : { deferInitialRefresh : false}
        });

        var partner = t.getScheduler({
            renderTo             : Ext.getBody(),
            partnerTimelinePanel : scheduler,
            viewConfig           : { deferInitialRefresh : false}
        });

        t.is(scheduler.timeAxis, partner.timeAxis, 'timeAxis ok');
        t.is(scheduler.timeAxisViewModel, partner.timeAxisViewModel, 'timeAxisViewModel ok');

        for (var i = 0; i < 5; i++) {
            scheduler.zoomOut();
            t.is(scheduler.viewPreset, partner.viewPreset, 'Should see synced preset name in partner panel');
        }

        scheduler.destroy();
        partner.destroy();
    });
    
    // enable when this bug fixed http://www.sencha.com/forum/showthread.php?295195
    t.xit('Partner timeline panel should share collapsed state (panel is expanded, partner is collapsed)', function (t) {
        var scheduler = t.getScheduler({
            renderTo   : Ext.getBody(),
            lockedGridConfig    : {
                collapsed   : true,
                width       : 200
            }
        });

        var partner = t.getScheduler({
            renderTo             : Ext.getBody(),
            partnerTimelinePanel : scheduler
        });
        
        var schedulerLocked = scheduler.lockedGrid;
        var partnerLocked = partner.lockedGrid;
        
        t.chain(
            { waitForRowsVisible : partner },
            function (next) {
                t.is(partnerLocked.getCollapsed(), 'left', 'Partner locked panel is collapsed');
                
                t.waitForEvent(schedulerLocked, 'viewready', next);
                schedulerLocked.expand();
            },
            function (next) {
                t.is(partnerLocked.getCollapsed(), false, 'Partner locked panel is expanded');
                t.is(partnerLocked.getWidth(), schedulerLocked.getWidth(), 'Locked grids width is synced');
                
                schedulerLocked.collapse();
                t.is(partnerLocked.getCollapsed(), 'left', 'Partner locked panel is collapsed');
                
                partnerLocked.expand();
                t.is(schedulerLocked.getCollapsed(), false, 'Partner locked panel is expanded');
                
                partnerLocked.collapse();
                t.is(schedulerLocked.getCollapsed(), 'left', 'Partner locked panel is collapsed');
                
                scheduler.destroy();
                partner.destroy();
            }
        );
    });
    
    // enable when this bug fixed http://www.sencha.com/forum/showthread.php?295195
    t.xit('Partner timeline panel should share collapsed state (panel is collapsed, partner is expanded)', function (t) {
        var scheduler = t.getScheduler({
            renderTo            : Ext.getBody(),
            lockedGridConfig    : {
                width       : 200
            }
        });

        var partner = t.getScheduler({
            renderTo                : Ext.getBody(),
            partnerTimelinePanel    : scheduler,
            lockedGridConfig        : {
                collapsed   : true
            }
        });
        
        var schedulerLocked = scheduler.lockedGrid;
        var partnerLocked = partner.lockedGrid;
        
        t.chain(
            { waitForRowsVisible : partner },
            function (next) {
                t.is(partnerLocked.getWidth(), schedulerLocked.getWidth(), 'Locked grids width is synced');
                
                schedulerLocked.collapse();
                t.is(partnerLocked.getCollapsed(), 'left', 'Partner locked panel is collapsed');
                
                partnerLocked.expand();
                t.is(schedulerLocked.getCollapsed(), false, 'Partner locked panel is expanded');
                
                partnerLocked.collapse();
                t.is(schedulerLocked.getCollapsed(), 'left', 'Partner locked panel is collapsed');
                
                schedulerLocked.expand();
                t.is(partnerLocked.getCollapsed(), false, 'Partner locked panel is expanded');
                
                scheduler.destroy();
                partner.destroy();
            }
        );
    });


    t.it('First panel and the shared timeAxisViewModel should not react if a new partner panel is created', function (t) {
        var scheduler = t.getScheduler({
            renderTo : Ext.getBody()
        });

        t.chain(
            { waitFor : 'rowsVisible', args : scheduler },

            function () {

                t.wontFire(scheduler.getSchedulingView(), 'refresh', 'First panel view should not refresh if a new partner panel is created');
                t.wontFire(scheduler.timeAxisViewModel, 'reconfigure', 'timeAxisViewModel should not be reconfigured by a new partner panel');
                t.wontFire(scheduler.timeAxis, 'reconfigure', 'timeAxis should not be reconfigured by a new partner panel');

                var partner = t.getScheduler({
                    renderTo             : Ext.getBody(),
                    partnerTimelinePanel : scheduler,
                    startDate            : new Date()
                });

                t.is(scheduler.timeAxis, partner.timeAxis, 'timeAxis ok');

                partner.destroy();
                scheduler.destroy();
            }
        );
    });

    t.it('Partner panel should read "width" in case "master" panel is hidden when partner is created', function (t) {
        var scheduler = t.getScheduler({
            renderTo         : Ext.getBody(),
            lockedGridConfig : {
                width : 222
            }
        });

        t.chain(
            { waitFor : 'rowsVisible', args : scheduler },

            function () {

                scheduler.hide();
                var partner = t.getScheduler({
                    renderTo             : Ext.getBody(),
                    partnerTimelinePanel : scheduler
                });

                t.is(partner.lockedGrid.getWidth(), 222, 'lockedGrid sized ok');

                partner.destroy();
                scheduler.destroy();
            }
        );
    });
});

