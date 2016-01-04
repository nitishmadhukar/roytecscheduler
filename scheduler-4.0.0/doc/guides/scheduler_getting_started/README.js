Ext.data.JsonP.scheduler_getting_started({"guide":"<h1 id='scheduler_getting_started-section-getting-started-with-ext-scheduler-2'>Getting Started with Ext Scheduler 2</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/scheduler_getting_started-section-introduction'>Introduction</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-orientation'>Orientation</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-data'>Data</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-synopsys'>Synopsys</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-the-scheduler-timeline-header'>The scheduler timeline header</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-events'>Events</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-rendering-customization'>Rendering customization</a></li>\n<li><a href='#!/guide/scheduler_getting_started-section-plugins-and-additional-features'>Plugins and additional features</a></li>\n</ol>\n</div>\n\n<h2 id='scheduler_getting_started-section-introduction'>Introduction</h2>\n\n<p>Ext Scheduler is custom ExtJS component which allows you to visualize and manage \"resources\" and their scheduled \"events\".\nThe concrete semantic of an <em>event</em> and <em>resource</em> is up to you. For example, an event can be a doctor's appointment, meeting or an airplane flight.\nA resource, in turn, can be a doctor (a person in general), a meeting room or an airport gate.</p>\n\n<p>If you have never used Ext JS before, it's highly recommended that you start by visiting the <a href=\"http://www.sencha.com/learn/extjs/?4x\">Ext JS Learning Center</a> to understand the basics of the underlying framework.</p>\n\n<p>To use this component, you first need your own license of the Ext JS framework. You can buy it or download a free trial for prototyping here: http://www.sencha.com/products/extjs</p>\n\n<p><p><img src=\"guides/scheduler_getting_started/ext-scheduler.png\" alt=\"\" width=\"506\" height=\"201\"></p></p>\n\n<h2 id='scheduler_getting_started-section-orientation'>Orientation</h2>\n\n<p>Depending from the orientation, a resource can be either a row or a column in the grid. Below you can see the same schedule in both horizontal and vertical orientation.\nYou can configure the orientation by setting the <a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-orientation\" rel=\"Sch.panel.SchedulerGrid-cfg-orientation\" class=\"docClass\">orientation</a> config property to 'horizontal' or 'vertical'. Additionally you can also change orientation during runtime by calling\nthe <a href=\"#!/api/Sch.panel.SchedulerGrid-method-setOrientation\" rel=\"Sch.panel.SchedulerGrid-method-setOrientation\" class=\"docClass\">setOrientation</a> method.</p>\n\n<p><p><img src=\"guides/scheduler_getting_started/scheduler-grid-horizontal.png\" alt=\"\" width=\"804\" height=\"402\"></p>\n<p><img src=\"guides/scheduler_getting_started/scheduler-grid-vertical.png\" alt=\"\" width=\"802\" height=\"403\"></p></p>\n\n<h2 id='scheduler_getting_started-section-data'>Data</h2>\n\n<p>The information about events and resources should be provided to the scheduler configuration object as two separate data stores: <code>eventStore</code> and <code>resourceStore</code>.\n<code>eventStore</code> should be an instance of <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a>, and <code>resourceStore</code> - instance of <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a>.\nBoth of those classes are subclasses of Ext.data.Store class. Please refer to the Ext.data.Store documentation to find out the base interface.</p>\n\n<p>Each data store is a collection of \"models\". Events and resources in the scheduler are represented with the <a href=\"#!/api/Sch.model.Event\" rel=\"Sch.model.Event\" class=\"docClass\">Sch.model.Event</a> and <a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a> classes.\nRefer to their documentation for details on how you can add additional fields, or how you can customize the pre-defined fields.</p>\n\n<p>The two models are tied together via the 'Id' property on the Resource model and the 'ResourceId' property on the Event model. This image shows a typical class definition diagram for the two models:</p>\n\n<p><p><img src=\"guides/scheduler_getting_started/scheduler-stores.png\" alt=\"\" width=\"512\" height=\"176\"></p></p>\n\n<p>Please refer to this guide <a href=\"http://docs.sencha.com/ext-js/4-0/#/guide/data\">http://docs.sencha.com/ext-js/4-0/#/guide/data</a> for base information about Ext JS data package.</p>\n\n<h2 id='scheduler_getting_started-section-synopsys'>Synopsys</h2>\n\n<p>HTML file:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;link href=\"../your_extjs_folder/resources/css/ext-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n        &lt;link href=\"/resources/css/sch-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n\n        &lt;script src=\"../your_extjs_folder/ext-all-debug.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n        &lt;script src=\"/sch-all-debug.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n\n        &lt;script type=\"text/javascript\" src=\"synopsys.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>synopsys.js:</p>\n\n<pre><code>Ext.onReady(function() {\n\n    // Store holding all the resources\n    var resourceStore = new <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a>({\n        model   : '<a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a>'\n    });\n\n    resourceStore.loadData([\n        {\n            Id      : 'a',\n            Name    : 'Rob'\n        },\n        {\n            Id      : 'b',\n            Name    : 'Mike'\n        }\n    ]);\n\n    // Store holding all the events\n    var eventStore = new <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a>({\n        model   : '<a href=\"#!/api/Sch.model.Event\" rel=\"Sch.model.Event\" class=\"docClass\">Sch.model.Event</a>',\n\n        data    :  [   \n            {\n                ResourceId      : 'a',\n                Name            : 'Some task', \n                StartDate       : '2010-05-22 10:00',\n                EndDate         : '2010-05-22 12:00'\n            },\n            {\n                ResourceId      : 'b',\n                Name            : 'Some other task', \n                StartDate       : '2010-05-22 13:00',\n                EndDate         : '2010-05-22 16:00'\n            }\n        ]\n    });\n\n    var startDate = new Date(2010, 4, 22, 6);\n\n    var scheduler = new <a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>({\n        width       : 600,\n        height      : 200,\n\n        // Setup view configuration\n        startDate   : startDate,\n        endDate     : <a href=\"#!/api/Sch.util.Date-static-method-add\" rel=\"Sch.util.Date-static-method-add\" class=\"docClass\">Sch.util.Date.add</a>(startDate, <a href=\"#!/api/Sch.util.Date-static-property-HOUR\" rel=\"Sch.util.Date-static-property-HOUR\" class=\"docClass\">Sch.util.Date.HOUR</a>, 24),\n\n        viewPreset  : 'hourAndDay',\n\n        // Setup your static columns\n        columns     : [\n            { header : 'Staff', width : 130, dataIndex : 'Name'}\n        ],\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore\n    });\n\n    scheduler.render(Ext.getBody());\n});\n</code></pre>\n\n<h2 id='scheduler_getting_started-section-the-scheduler-timeline-header'>The scheduler timeline header</h2>\n\n<p><p><img src=\"guides/scheduler_getting_started/scheduler-timeline-header.png\" alt=\"\" width=\"629\" height=\"90\"></p></p>\n\n<p>The presentation of the scheduler's timeline can be configured using the <a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-viewPreset\" rel=\"Sch.panel.SchedulerGrid-cfg-viewPreset\" class=\"docClass\">viewPreset</a> configuration option.\nYou can choose from a list of pre-defined presets or create your own custom view preset. Each view preset can consist of 1-3 header <a href=\"#!/api/Sch.preset.ViewPresetHeaderRow\" rel=\"Sch.preset.ViewPresetHeaderRow\" class=\"docClass\">rows</a>.\nEach row can be independently configured with its own dateFormat (or custom renderer), time unit and increment. The scheduler comes with several predefined view presets that you can use:</p>\n\n<pre><code>\"hourAndDay\"\n\"dayAndWeek\"\n\"weekAndDay\"\n\"weekAndMonth\"\n\"monthAndYear\"\n\"year\"\n</code></pre>\n\n<p>If none of these suits your needs, you can easily create your own custom view presets too. Here's an example of a viewPreset:</p>\n\n<pre><code>weekAndMonth : {\n    timeColumnWidth : 100,\n    rowHeight: 24,              // Only used in horizontal orientation\n    resourceColumnWidth : 100,  // Only used in vertical orientation\n    displayDateFormat : 'Y-m-d',\n    shiftUnit : \"WEEK\",\n    shiftIncrement : 5,\n    defaultSpan : 6,            // By default, show 6 weeks\n\n    timeResolution : {\n        unit : \"DAY\",\n        increment : 1\n    },\n\n    headerConfig : {\n        middle : {\n            unit : \"WEEK\",\n            renderer : function(start, end, cfg) {\n                cfg.align = 'left';\n                return Ext.Date.format(start, 'd M');\n            }\n        },\n        top : {\n            unit : \"MONTH\",\n            dateFormat : 'M Y'\n        }\n    }\n}\n</code></pre>\n\n<p>Please refer to the <a href=\"#!/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> documentation for further information.</p>\n\n<h2 id='scheduler_getting_started-section-events'>Events</h2>\n\n<p>Virtually every sub-component in the scheduler (including the scheduler itself), implements the Observable pattern. In the Ext JS framework, this pattern is represented with the Ext.util.Observable mixin.</p>\n\n<p>This means that you can be notified about various events, happening within the scheduler and provide your custom handlers (listeners) for them. For example:</p>\n\n<pre><code>scheduler.on('eventclick', function (sch, event) {\n    alert(\"You've clicked on \" + event.get('Name') + ' event');\n}); \n</code></pre>\n\n<p>The function provided as the 2nd argument to the <code>on</code> method call, will be called when a user clicks on an event in scheduler. Please refer to the Ext.util.Observable documentation for details\non how you can customize the behaviour of the listeners.</p>\n\n<h2 id='scheduler_getting_started-section-rendering-customization'>Rendering customization</h2>\n\n<p>There are several ways you can customize the presentation of the events and time line itself. This section will briefly summarize them. Please also refer to the documentation of the each\noption.</p>\n\n<ul>\n<li><p><a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-eventBarTextField\" rel=\"Sch.panel.SchedulerGrid-cfg-eventBarTextField\" class=\"docClass\">eventBarTextField</a> This is the easiest way of defining which field in your model to display in each rendered event (defaults to 'Name').</p></li>\n<li><p><a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-eventRenderer\" rel=\"Sch.panel.SchedulerGrid-cfg-eventRenderer\" class=\"docClass\">eventRenderer</a> This function can be provided as the configuration option and will be called for each event. It can return a string or an object.\nString will be used as the \"event body\" and object will be passed to the <code>eventBodyTemplate</code> template (must be provided in this case). Returning string from this function is the simplest\nmethod to customize the presentation of event.</p></li>\n<li><p><a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" rel=\"Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a> - the template for \"event body\". The \"event body\" is the internal content of the event, w/o the wrapping markup. It still can contain arbitrary HTML. This template will\nreceive either the return value from <code>eventRenderer</code> or the whole data object of the event being rendered (each field will be available as the <code>{FieldName}</code> symbol).</p></li>\n<li><p><a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-eventTpl\" rel=\"Sch.panel.SchedulerGrid-cfg-eventTpl\" class=\"docClass\">eventTpl</a> - the top-most event template, only override when you know what you are doing.</p></li>\n<li><p>timeCellRenderer - can be used to customize the grid cells. This is a \"normal\" ExtJS column renderer, but its returning value will be ignored.</p></li>\n</ul>\n\n\n<h2 id='scheduler_getting_started-section-plugins-and-additional-features'>Plugins and additional features</h2>\n\n<p>By itself, the scheduler is merely a visualizing tool. To make it more interactive you can enable/add various plugins to it. In the simplest case for example, the events drag and drop functionality\ncan be activated with the <a href=\"#!/api/Sch.panel.SchedulerGrid-cfg-enableEventDragDrop\" rel=\"Sch.panel.SchedulerGrid-cfg-enableEventDragDrop\" class=\"docClass\">enableEventDragDrop</a> configuration option (defaults to true). Under the hood, it will add drag-and-drop support for each scheduled event.</p>\n\n<p>To add a plugin manually, you need to pass the instance of the plugin in the <code>plugins</code> configuration option. For example, to enable the <a href=\"#!/api/Sch.plugin.Pan\" rel=\"Sch.plugin.Pan\" class=\"docClass\">pan plugin</a>:</p>\n\n<pre><code>    var scheduler = Ext.create('<a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('<a href=\"#!/api/Sch.plugin.Pan\" rel=\"Sch.plugin.Pan\" class=\"docClass\">Sch.plugin.Pan</a>', { enableVerticalPan : true })\n        ]\n    });\n</code></pre>\n\n<p>A plugin may have its own configuration options. You can pass several plugins at once. For the list of available plugins, please examine the classes in the <code>Sch.plugin</code> namespace.</p>\n","title":"Getting Started with Ext Scheduler 2"});