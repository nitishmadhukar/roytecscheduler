Ext.data.JsonP.Sch_plugin_Lines({"tagname":"class","name":"Sch.plugin.Lines","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Lines.js","href":"Lines.html#Sch-plugin-Lines"}],"extends":"Sch.feature.AbstractTimeSpan","aliases":{"plugin":["scheduler_lines"]},"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"members":[{"name":"clsField","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-clsField","meta":{}},{"name":"headerTemplate","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-headerTemplate","meta":{"private":true}},{"name":"innerHeaderTpl","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-innerHeaderTpl","meta":{}},{"name":"innerTpl","tagname":"cfg","owner":"Sch.plugin.Lines","id":"cfg-innerTpl","meta":{}},{"name":"renderDelay","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-renderDelay","meta":{}},{"name":"showHeaderElements","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-showHeaderElements","meta":{}},{"name":"showTip","tagname":"cfg","owner":"Sch.plugin.Lines","id":"cfg-showTip","meta":{}},{"name":"store","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-store","meta":{}},{"name":"template","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-template","meta":{}},{"name":"cls","tagname":"property","owner":"Sch.plugin.Lines","id":"property-cls","meta":{"private":true}},{"name":"prepareTemplateData","tagname":"property","owner":"Sch.plugin.Lines","id":"property-prepareTemplateData","meta":{"private":true}},{"name":"side","tagname":"property","owner":"Sch.plugin.Lines","id":"property-side","meta":{"private":true}},{"name":"generateHeaderMarkup","tagname":"method","owner":"Sch.plugin.Lines","id":"method-generateHeaderMarkup","meta":{}},{"name":"generateMarkup","tagname":"method","owner":"Sch.plugin.Lines","id":"method-generateMarkup","meta":{}},{"name":"getElementCls","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getElementCls","meta":{}},{"name":"getElementData","tagname":"method","owner":"Sch.plugin.Lines","id":"method-getElementData","meta":{"private":true}},{"name":"getElementId","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getElementId","meta":{}},{"name":"getHeaderContainerEl","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderContainerEl","meta":{}},{"name":"getHeaderElementCls","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementCls","meta":{}},{"name":"getHeaderElementData","tagname":"method","owner":"Sch.plugin.Lines","id":"method-getHeaderElementData","meta":{"private":true}},{"name":"getHeaderElementId","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementId","meta":{}},{"name":"getHeaderElementPosition","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementPosition","meta":{}},{"name":"getTemplateData","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getTemplateData","meta":{}},{"name":"init","tagname":"method","owner":"Sch.plugin.Lines","id":"method-init","meta":{"private":true}},{"name":"setDisabled","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-setDisabled","meta":{}},{"name":"setElementX","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-setElementX","meta":{}}],"code_type":"ext_define","id":"class-Sch.plugin.Lines","short_doc":"Plugin (ptype = 'scheduler_lines') for showing \"global\" time lines in the scheduler grid. ...","component":false,"superclasses":["Ext.AbstractPlugin","Sch.feature.AbstractTimeSpan"],"subclasses":["Sch.feature.ColumnLines","Sch.plugin.CurrentTimeLine"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='docClass'>Sch.feature.AbstractTimeSpan</a><div class='subclass '><strong>Sch.plugin.Lines</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Sch.feature.ColumnLines' rel='Sch.feature.ColumnLines' class='docClass'>Sch.feature.ColumnLines</a></div><div class='dependency'><a href='#!/api/Sch.plugin.CurrentTimeLine' rel='Sch.plugin.CurrentTimeLine' class='docClass'>Sch.plugin.CurrentTimeLine</a></div><h4>Files</h4><div class='dependency'><a href='source/Lines.html#Sch-plugin-Lines' target='_blank'>Lines.js</a></div></pre><div class='doc-contents'><p>Plugin (ptype = 'scheduler_lines') for showing \"global\" time lines in the scheduler grid. It uses a store to populate itself, records in this store should have the following fields:</p>\n\n<ul>\n<li><code>Date</code> The date of the line. This date is formatted based on what's configured in the <a href=\"#!/api/Sch.preset.ViewPreset-cfg-displayDateFormat\" rel=\"Sch.preset.ViewPreset-cfg-displayDateFormat\" class=\"docClass\">Sch.preset.ViewPreset.displayDateFormat</a> option of the current \"viewPreset\".</li>\n<li><code>Text</code> The Text to show when hovering over the line (optional)</li>\n<li><code>Cls</code>  A CSS class to add to the line (optional)</li>\n</ul>\n\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var dayStore    = new Ext.data.Store({\n        fields  : [ 'Date', 'Text', 'Cls' ],\n\n        data    : [\n            {\n                Date        : new Date(2011, 06, 19),\n                Text        : 'Some important day'\n            }\n        ]\n    });\n\n\n    var scheduler = Ext.create('<a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('<a href=\"#!/api/Sch.plugin.Lines\" rel=\"Sch.plugin.Lines\" class=\"docClass\">Sch.plugin.Lines</a>', { store : dayStore })\n        ]\n    });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-clsField' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-clsField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-clsField' class='name expandable'>clsField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Name of field ...</div><div class='long'><p>Name of field</p>\n<p>Defaults to: <code>'Cls'</code></p></div></div></div><div id='cfg-headerTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-headerTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-headerTemplate' class='name expandable'>headerTemplate</a> : Ext.XTemplate<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Template used to render the header elements</p>\n</div><div class='long'><p>Template used to render the header elements</p>\n</div></div></div><div id='cfg-innerHeaderTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-innerHeaderTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-innerHeaderTpl' class='name expandable'>innerHeaderTpl</a> : String/Ext.XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A template providing additional markup to render into each timespan header element</p>\n</div><div class='long'><p>A template providing additional markup to render into each timespan header element</p>\n</div></div></div><div id='cfg-innerTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-cfg-innerTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-cfg-innerTpl' class='name expandable'>innerTpl</a> : String/Ext.XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A template providing additional markup to render into each timespan element</p>\n</div><div class='long'><p>A template providing additional markup to render into each timespan element</p>\n</div></div></div><div id='cfg-renderDelay' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-renderDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-renderDelay' class='name expandable'>renderDelay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Delay the zones rendering by this amount (in ms) to speed up the default rendering of rows and events. ...</div><div class='long'><p>Delay the zones rendering by this amount (in ms) to speed up the default rendering of rows and events.</p>\n<p>Defaults to: <code>15</code></p></div></div></div><div id='cfg-showHeaderElements' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-showHeaderElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-showHeaderElements' class='name expandable'>showHeaderElements</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set this to true to show indicators in the timeline header area. ...</div><div class='long'><p>Set this to <code>true</code> to show indicators in the timeline header area.</p>\n\n<p>Header indicators are placed right above the corresponding element of the scheduling view. You can customize the HTML markup\nfor these indicators with the <a href=\"#!/api/Sch.feature.AbstractTimeSpan-cfg-headerTemplate\" rel=\"Sch.feature.AbstractTimeSpan-cfg-headerTemplate\" class=\"docClass\">headerTemplate</a> config. Note that the indicators are rendered as a regular div element,\nwhich will be styled differently in modern vs legacy browsers.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-showTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-cfg-showTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-cfg-showTip' class='name expandable'>showTip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>'true' to include a native browser tooltip when hovering over the line. ...</div><div class='long'><p>'true' to include a native browser tooltip when hovering over the line.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-store' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-store' class='name expandable'>store</a> : Ext.data.Store/String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A store with timespan data, or a string identifying a store.</p>\n</div><div class='long'><p>A store with timespan data, or a string identifying a store.</p>\n</div></div></div><div id='cfg-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-template' class='name expandable'>template</a> : Ext.XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Template to render the timespan elements</p>\n</div><div class='long'><p>Template to render the timespan elements</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>An internal css class which is added to each rendered timespan element ...</div><div class='long'><p>An internal css class which is added to each rendered timespan element</p>\n<p>Defaults to: <code>'sch-timeline'</code></p><p>Overrides: <a href=\"#!/api/Sch.feature.AbstractTimeSpan-property-cls\" rel=\"Sch.feature.AbstractTimeSpan-property-cls\" class=\"docClass\">Sch.feature.AbstractTimeSpan.cls</a></p></div></div></div><div id='property-prepareTemplateData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-property-prepareTemplateData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-property-prepareTemplateData' class='name expandable'>prepareTemplateData</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-side' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-property-side' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-property-side' class='name expandable'>side</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-generateHeaderMarkup' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-method-generateHeaderMarkup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-method-generateHeaderMarkup' class='name expandable'>generateHeaderMarkup</a>( <span class='pre'>isPrint, records</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates markup for headers elements. ...</div><div class='long'><p>Generates markup for headers elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPrint</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Sch.feature.AbstractTimeSpan-method-generateHeaderMarkup\" rel=\"Sch.feature.AbstractTimeSpan-method-generateHeaderMarkup\" class=\"docClass\">Sch.feature.AbstractTimeSpan.generateHeaderMarkup</a></p></div></div></div><div id='method-generateMarkup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-method-generateMarkup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-method-generateMarkup' class='name expandable'>generateMarkup</a>( <span class='pre'>isPrint, records</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates markup for elements. ...</div><div class='long'><p>Generates markup for elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPrint</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Sch.feature.AbstractTimeSpan-method-generateMarkup\" rel=\"Sch.feature.AbstractTimeSpan-method-generateMarkup\" class=\"docClass\">Sch.feature.AbstractTimeSpan.generateMarkup</a></p></div></div></div><div id='method-getElementCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getElementCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getElementCls' class='name expandable'>getElementCls</a>( <span class='pre'>record, data</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return element class for a record. ...</div><div class='long'><p>Return element class for a record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>Data record</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Template data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-method-getElementData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-method-getElementData' class='name expandable'>getElementData</a>( <span class='pre'>viewStart, viewEnd, records</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewStart</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>viewEnd</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getElementId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getElementId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getElementId' class='name expandable'>getElementId</a>( <span class='pre'>record</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns id of element for data record. ...</div><div class='long'><p>Returns id of element for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderContainerEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderContainerEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderContainerEl' class='name expandable'>getHeaderContainerEl</a>( <span class='pre'></span> ) : Ext.dom.Element<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns container to render header elements. ...</div><div class='long'><p>Returns container to render header elements.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.dom.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementCls' class='name expandable'>getHeaderElementCls</a>( <span class='pre'>record, data</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return header element class for data record. ...</div><div class='long'><p>Return header element class for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>Data record</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-method-getHeaderElementData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-method-getHeaderElementData' class='name expandable'>getHeaderElementData</a>( <span class='pre'>records</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getHeaderElementId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementId' class='name expandable'>getHeaderElementId</a>( <span class='pre'>record</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns id of header element for data record. ...</div><div class='long'><p>Returns id of header element for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementPosition' class='name expandable'>getHeaderElementPosition</a>( <span class='pre'>date</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns position of header element by date. ...</div><div class='long'><p>Returns position of header element by date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTemplateData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getTemplateData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getTemplateData' class='name expandable'>getTemplateData</a>( <span class='pre'>record</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns template data to render elements. ...</div><div class='long'><p>Returns template data to render elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Lines'>Sch.plugin.Lines</span><br/><a href='source/Lines.html#Sch-plugin-Lines-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Lines-method-init' class='name expandable'>init</a>( <span class='pre'>scheduler</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scheduler</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setDisabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>Pass <code>true</code> to disable the plugin and remove all rendered elements.</p>\n</div></li></ul></div></div></div><div id='method-setElementX' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.feature.AbstractTimeSpan' rel='Sch.feature.AbstractTimeSpan' class='defined-in docClass'>Sch.feature.AbstractTimeSpan</a><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-setElementX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-setElementX' class='name expandable'>setElementX</a>( <span class='pre'>el, x</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets element X-coordinate relative direction (rtl or ltr). ...</div><div class='long'><p>Sets element X-coordinate relative direction (rtl or ltr).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Ext.Element<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});