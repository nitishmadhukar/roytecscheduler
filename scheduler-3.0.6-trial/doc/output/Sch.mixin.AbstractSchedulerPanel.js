Ext.data.JsonP.Sch_mixin_AbstractSchedulerPanel({"tagname":"class","name":"Sch.mixin.AbstractSchedulerPanel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AbstractSchedulerPanel.js","href":"AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Sch.data.EventStore","Sch.data.ResourceStore","Sch.model.Event","Sch.model.Resource","Sch.plugin.ResourceZones","Sch.util.Date"],"uses":[],"members":[{"name":"allowOverlap","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-allowOverlap","meta":{}},{"name":"barMargin","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-barMargin","meta":{}},{"name":"calendarColumnWidth","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-calendarColumnWidth","meta":{}},{"name":"calendarTimeAxisCfg","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-calendarTimeAxisCfg","meta":{}},{"name":"constrainDragToResource","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-constrainDragToResource","meta":{}},{"name":"enableEventDragDrop","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-enableEventDragDrop","meta":{}},{"name":"endParamName","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-endParamName","meta":{}},{"name":"eventBarIconClsField","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventBarIconClsField","meta":{}},{"name":"eventBarTextField","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventBarTextField","meta":{}},{"name":"eventBodyTemplate","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventBodyTemplate","meta":{}},{"name":"eventRenderer","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventRenderer","meta":{}},{"name":"eventRendererScope","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventRendererScope","meta":{}},{"name":"eventStore","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventStore","meta":{}},{"name":"eventTpl","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-eventTpl","meta":{}},{"name":"passStartEndParameters","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-passStartEndParameters","meta":{}},{"name":"resourceColumnClass","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-resourceColumnClass","meta":{}},{"name":"resourceColumnWidth","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-resourceColumnWidth","meta":{}},{"name":"resourceStore","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-resourceStore","meta":{}},{"name":"resourceZones","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-resourceZones","meta":{}},{"name":"resourceZonesConfig","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-resourceZonesConfig","meta":{}},{"name":"startParamName","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-startParamName","meta":{}},{"name":"timeAxisColumnCfg","tagname":"cfg","owner":"Sch.mixin.AbstractSchedulerPanel","id":"cfg-timeAxisColumnCfg","meta":{}},{"name":"variableRowHeight","tagname":"property","owner":"Sch.mixin.AbstractSchedulerPanel","id":"property-variableRowHeight","meta":{"private":true}},{"name":"_initializeSchedulerPanel","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-_initializeSchedulerPanel","meta":{"private":true}},{"name":"applyStartEndParameters","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-applyStartEndParameters","meta":{"private":true}},{"name":"createResourceColumns","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-createResourceColumns","meta":{"private":true}},{"name":"getEventStore","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-getEventStore","meta":{}},{"name":"getResourceStore","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-getResourceStore","meta":{}},{"name":"initStores","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-initStores","meta":{"private":true}},{"name":"onEventCreated","tagname":"method","owner":"Sch.mixin.AbstractSchedulerPanel","id":"method-onEventCreated","meta":{}}],"code_type":"ext_define","id":"class-Sch.mixin.AbstractSchedulerPanel","short_doc":"A mixin providing \"scheduling\" functionality to the consuming \"panel\". ...","component":false,"superclasses":["Ext.Base"],"subclasses":["Sch.mixin.SchedulerPanel"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Sch.mixin.AbstractSchedulerPanel</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sch.data.EventStore' rel='Sch.data.EventStore' class='docClass'>Sch.data.EventStore</a></div><div class='dependency'><a href='#!/api/Sch.data.ResourceStore' rel='Sch.data.ResourceStore' class='docClass'>Sch.data.ResourceStore</a></div><div class='dependency'><a href='#!/api/Sch.model.Event' rel='Sch.model.Event' class='docClass'>Sch.model.Event</a></div><div class='dependency'><a href='#!/api/Sch.model.Resource' rel='Sch.model.Resource' class='docClass'>Sch.model.Resource</a></div><div class='dependency'><a href='#!/api/Sch.plugin.ResourceZones' rel='Sch.plugin.ResourceZones' class='docClass'>Sch.plugin.ResourceZones</a></div><div class='dependency'><a href='#!/api/Sch.util.Date' rel='Sch.util.Date' class='docClass'>Sch.util.Date</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Sch.mixin.SchedulerPanel' rel='Sch.mixin.SchedulerPanel' class='docClass'>Sch.mixin.SchedulerPanel</a></div><h4>Files</h4><div class='dependency'><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel' target='_blank'>AbstractSchedulerPanel.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>A mixin providing \"scheduling\" functionality to the consuming \"panel\".\nA consuming class should have already consumed the <a href=\"#!/api/Sch.mixin.AbstractTimelinePanel\" rel=\"Sch.mixin.AbstractTimelinePanel\" class=\"docClass\">Sch.mixin.AbstractTimelinePanel</a> mixin.</p>\n\n<p>This should not be used directly.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-allowOverlap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-allowOverlap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-allowOverlap' class='name expandable'>allowOverlap</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set to false if you don't want to allow events overlapping (defaults to true). ...</div><div class='long'><p>Set to false if you don't want to allow events overlapping (defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-barMargin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-barMargin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-barMargin' class='name expandable'>barMargin</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Controls how much space to leave between the event bars and the row borders. ...</div><div class='long'><p>Controls how much space to leave between the event bars and the row borders. Defaults to 1.</p>\n</div></div></div><div id='cfg-calendarColumnWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-calendarColumnWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-calendarColumnWidth' class='name expandable'>calendarColumnWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Used only in calendar mode. ...</div><div class='long'><p>Used only in calendar mode. Defines the width of a single column.</p>\n</div></div></div><div id='cfg-calendarTimeAxisCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-calendarTimeAxisCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-calendarTimeAxisCfg' class='name expandable'>calendarTimeAxisCfg</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A Ext.grid.column.Column config used to configure the time axis column in calendar mode.</p>\n</div><div class='long'><p>A Ext.grid.column.Column config used to configure the time axis column in calendar mode.</p>\n</div></div></div><div id='cfg-constrainDragToResource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-constrainDragToResource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-constrainDragToResource' class='name expandable'>constrainDragToResource</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to only allow dragging events within the same resource. ...</div><div class='long'><p>Set to true to only allow dragging events within the same resource. Defaults to false.</p>\n</div></div></div><div id='cfg-enableEventDragDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-enableEventDragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-enableEventDragDrop' class='name expandable'>enableEventDragDrop</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to enable drag and drop of events, defaults to true ...</div><div class='long'><p>true to enable drag and drop of events, defaults to true</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-endParamName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-endParamName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-endParamName' class='name expandable'>endParamName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the end date parameter that will be passed to in every eventStore load request. ...</div><div class='long'><p>The name of the end date parameter that will be passed to in every <code>eventStore</code> load request.</p>\n<p>Defaults to: <code>'endDate'</code></p></div></div></div><div id='cfg-eventBarIconClsField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventBarIconClsField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventBarIconClsField' class='name expandable'>eventBarIconClsField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A field in the Event model whose value will be applied as a CSS class to each event bar to place a 16x16 icon. ...</div><div class='long'><p>A field in the Event model whose value will be applied as a CSS class to each event bar to place a 16x16 icon.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-eventBarTextField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventBarTextField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventBarTextField' class='name expandable'>eventBarTextField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The field in your data model that will be rendered into each event bar. ...</div><div class='long'><p>The field in your data model that will be rendered into each event bar.\nYou can alternatively use the eventBarRenderer to get full control over what gets displayed.</p>\n</div></div></div><div id='cfg-eventBodyTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventBodyTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventBodyTemplate' class='name expandable'>eventBodyTemplate</a> : String/Ext.Template<span class=\"signature\"></span></div><div class='description'><div class='short'>The template used to generate the markup of your events in the scheduler. ...</div><div class='long'><p>The template used to generate the markup of your events in the scheduler. To 'populate' the eventBodyTemplate with data, use the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" class=\"docClass\">eventRenderer</a> method</p>\n</div></div></div><div id='cfg-eventRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer' class='name expandable'>eventRenderer</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>An empty function by default, but provided so that you can override it. ...</div><div class='long'><p>An empty function by default, but provided so that you can override it. This function is called each time an event\nis rendered into the schedule to render the contents of the event. It's called with the event, its resource and a tplData object which\nallows you to populate data placeholders inside the event template.\nBy default, the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" class=\"docClass\">eventTpl</a> includes placeholders for 'cls' and 'style'. The cls property is a CSS class which will be added to the\nevent element. The style property is an inline style declaration for the event element. If you override the default <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" class=\"docClass\">eventTpl</a>, you can of course\ninclude other placeholder in your template markup. Note: You will still need to keep the original built-in placeholders for the scheduler to work.</p>\n\n<pre> eventRenderer : function (eventRec, resourceRec, templateData) {\n     templateData.style = 'color:white';                 // You can use inline styles too.\n     templateData.cls = resourceRec.get('Category');     // Read a property from the resource record, used as a CSS class to style the event\n\n     return Ext.Date.format(eventRec.getStartDate(), 'Y-m-d') + ': ' + eventRec.getName();\n }\n</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventRecord</span> : <a href=\"#!/api/Sch.model.Event\" rel=\"Sch.model.Event\" class=\"docClass\">Sch.model.Event</a><div class='sub-desc'><p>The event about to be rendered</p>\n</div></li><li><span class='pre'>resourceRecord</span> : <a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a><div class='sub-desc'><p>The resource row in which the event is being created</p>\n</div></li><li><span class='pre'>tplData</span> : Object<div class='sub-desc'><p>An object that will be applied to the containing <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl\" class=\"docClass\">eventTpl</a>.</p>\n</div></li><li><span class='pre'>row</span> : Number<div class='sub-desc'><p>The row index</p>\n</div></li><li><span class='pre'>col</span> : Number<div class='sub-desc'><p>The column index</p>\n</div></li><li><span class='pre'>ds</span> : <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a><div class='sub-desc'><p>The resource store</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/Object</span><div class='sub-desc'><p>A simple string, or a custom object which will be applied to the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventBodyTemplate\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a>, creating the actual HTML</p>\n</div></li></ul></div></div></div><div id='cfg-eventRendererScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventRendererScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventRendererScope' class='name expandable'>eventRendererScope</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The scope to use for the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" class=\"docClass\">eventRenderer</a> function</p>\n</div><div class='long'><p>The scope to use for the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventRenderer\" class=\"docClass\">eventRenderer</a> function</p>\n</div></div></div><div id='cfg-eventStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventStore' class='name expandable'>eventStore</a> : <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The Ext.data.Store holding the events to be rendered into the scheduler (required). ...</div><div class='long'><p>The Ext.data.Store holding the events to be rendered into the scheduler (required).\n@required</p>\n</div></div></div><div id='cfg-eventTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-eventTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventTpl' class='name expandable'>eventTpl</a> : Ext.Template<span class=\"signature\"></span></div><div class='description'><div class='short'>The wrapping template used to renderer your events in the scheduler. ...</div><div class='long'><p>The wrapping template used to renderer your events in the scheduler. Normally you should not override this,\nonly do so if you need total control of how the events are rendered/styled. See the <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-eventBodyTemplate\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a> for more information.</p>\n</div></div></div><div id='cfg-passStartEndParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-passStartEndParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-passStartEndParameters' class='name expandable'>passStartEndParameters</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to apply start and end dates of the current view to any eventStore load requests. ...</div><div class='long'><p>true to apply start and end dates of the current view to any <code>eventStore</code> load requests.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-resourceColumnClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-resourceColumnClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceColumnClass' class='name expandable'>resourceColumnClass</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines the column class for the resources, override this to use your own custom column class. ...</div><div class='long'><p>Defines the column class for the resources, override this to use your own custom column class. (Used only in vertical orientation)</p>\n<p>Defaults to: <code>&quot;Sch.column.Resource&quot;</code></p></div></div></div><div id='cfg-resourceColumnWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-resourceColumnWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceColumnWidth' class='name expandable'>resourceColumnWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Used only in vertical mode. ...</div><div class='long'><p>Used only in vertical mode. Defines the width of a single column.</p>\n</div></div></div><div id='cfg-resourceStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-resourceStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceStore' class='name expandable'>resourceStore</a> : <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The Ext.data.Store holding the resources to be rendered into the scheduler (required).</p>\n</div><div class='long'><p>The Ext.data.Store holding the resources to be rendered into the scheduler (required).</p>\n</div></div></div><div id='cfg-resourceZones' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-resourceZones' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceZones' class='name expandable'>resourceZones</a> : <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A special store containing data used to highlight the underlying schedule for the resources,\nusing Sch.plugin.Resourc...</div><div class='long'><p>A special store containing data used to highlight the underlying schedule for the resources,\nusing <a href=\"#!/api/Sch.plugin.ResourceZones\" rel=\"Sch.plugin.ResourceZones\" class=\"docClass\">Sch.plugin.ResourceZones</a>. This can be used to color non-working time or any other meta data associated with a resource.\nSee also <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceZonesConfig\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-resourceZonesConfig\" class=\"docClass\">resourceZonesConfig</a>.</p>\n</div></div></div><div id='cfg-resourceZonesConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-resourceZonesConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceZonesConfig' class='name expandable'>resourceZonesConfig</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>An object with configuration options for Sch.plugin.ResourceZones. ...</div><div class='long'><p>An object with configuration options for <a href=\"#!/api/Sch.plugin.ResourceZones\" rel=\"Sch.plugin.ResourceZones\" class=\"docClass\">Sch.plugin.ResourceZones</a>. Ignored if no <a href=\"#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-resourceZones\" rel=\"Sch.mixin.AbstractSchedulerPanel-cfg-resourceZones\" class=\"docClass\">resourceZones</a>\nconfig is provided.</p>\n</div></div></div><div id='cfg-startParamName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-startParamName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-startParamName' class='name expandable'>startParamName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the start date parameter that will be passed to in every eventStore load request. ...</div><div class='long'><p>The name of the start date parameter that will be passed to in every <code>eventStore</code> load request.</p>\n<p>Defaults to: <code>'startDate'</code></p></div></div></div><div id='cfg-timeAxisColumnCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-cfg-timeAxisColumnCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-cfg-timeAxisColumnCfg' class='name expandable'>timeAxisColumnCfg</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A Ext.grid.column.Column config used to configure the time axis column in vertical mode.</p>\n</div><div class='long'><p>A Ext.grid.column.Column config used to configure the time axis column in vertical mode.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-variableRowHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-property-variableRowHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-property-variableRowHeight' class='name expandable'>variableRowHeight</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_initializeSchedulerPanel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-_initializeSchedulerPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-_initializeSchedulerPanel' class='name expandable'>_initializeSchedulerPanel</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-applyStartEndParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-applyStartEndParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-applyStartEndParameters' class='name expandable'>applyStartEndParameters</a>( <span class='pre'>eventStore, options</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Applies the start and end date to each event store request ...</div><div class='long'><p>Applies the start and end date to each event store request</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventStore</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createResourceColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-createResourceColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-createResourceColumns' class='name expandable'>createResourceColumns</a>( <span class='pre'>colWidth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colWidth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getEventStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-getEventStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-getEventStore' class='name expandable'>getEventStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the event store instance ...</div><div class='long'><p>Returns the event store instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Sch.mixin.AbstractTimelinePanel-method-getEventStore\" rel=\"Sch.mixin.AbstractTimelinePanel-method-getEventStore\" class=\"docClass\">Sch.mixin.AbstractTimelinePanel.getEventStore</a></p></div></div></div><div id='method-getResourceStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-getResourceStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-getResourceStore' class='name expandable'>getResourceStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the resource store instance ...</div><div class='long'><p>Returns the resource store instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initStores' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-initStores' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-initStores' class='name expandable'>initStores</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onEventCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.AbstractSchedulerPanel'>Sch.mixin.AbstractSchedulerPanel</span><br/><a href='source/AbstractSchedulerPanel.html#Sch-mixin-AbstractSchedulerPanel-method-onEventCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.AbstractSchedulerPanel-method-onEventCreated' class='name expandable'>onEventCreated</a>( <span class='pre'>eventRecord</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>An empty function by default, but provided so that you can override it to supply default record values etc. ...</div><div class='long'><p>An empty function by default, but provided so that you can override it to supply default record values etc. This function is called after a new event has been created (but\nbefore it is inserted to the store). This is for example called after a user dragged a new bar in the scheduler (the DragFreate feature).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventRecord</span> : <a href=\"#!/api/Sch.model.Event\" rel=\"Sch.model.Event\" class=\"docClass\">Sch.model.Event</a><div class='sub-desc'><p>The event that was just created</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});