StartTest({
    forceDOMVisible     : true
}, function(t) {
    var sched = t.getScheduler({
        renderTo    : document.body,
        plugins     : t.getAllPlugins()
    });

    t.chain(
        { drag : '.sch-event', by : [10, 10] },
        { drag : '.sch-resizable-handle', by : [20, 0] },

        function() {
            t.selectorNotExists('[class*="undefined"]', 'No "undefined" class selectors found in DOM')
            t.selectorNotExists('[id*="undefined"]', 'No "undefined" ids found in DOM')
            t.selectorNotExists('[class*="null"]', 'No "null" class selectors found in DOM')
            t.selectorNotExists('[id*="null"]', 'No "null" ids found in DOM')
            t.contentNotLike(document.body, '[object Object]', 'No stray objects found rendered in DOM')

            // https://www.sencha.com/forum/showthread.php?302844
            t.knownBugIn('6.0.0.640', function (t) {
                sched.destroy();
                t.selectorNotExists('[class*="sch-"]', 'No sch-XXX selectors found in DOM')
            }, 'Cannot destroy both collapsed and hidden panel')
        }
    )
})
