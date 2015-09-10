Ext.data.JsonP.Sch_feature_AbstractTimeSpan({"tagname":"class","name":"Sch.feature.AbstractTimeSpan","autodetected":{},"files":[{"filename":"AbstractTimeSpan.js","href":"AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan"}],"extends":"Ext.AbstractPlugin","members":[{"name":"clsField","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-clsField","meta":{}},{"name":"headerTemplate","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-headerTemplate","meta":{"private":true}},{"name":"innerHeaderTpl","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-innerHeaderTpl","meta":{}},{"name":"renderDelay","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-renderDelay","meta":{}},{"name":"showHeaderElements","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-showHeaderElements","meta":{}},{"name":"store","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-store","meta":{}},{"name":"template","tagname":"cfg","owner":"Sch.feature.AbstractTimeSpan","id":"cfg-template","meta":{}},{"name":"cls","tagname":"property","owner":"Sch.feature.AbstractTimeSpan","id":"property-cls","meta":{"private":true}},{"name":"generateHeaderMarkup","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-generateHeaderMarkup","meta":{}},{"name":"generateMarkup","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-generateMarkup","meta":{}},{"name":"getElementCls","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getElementCls","meta":{}},{"name":"getElementId","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getElementId","meta":{}},{"name":"getHeaderContainerEl","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderContainerEl","meta":{}},{"name":"getHeaderElementCls","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementCls","meta":{}},{"name":"getHeaderElementId","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementId","meta":{}},{"name":"getHeaderElementPosition","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getHeaderElementPosition","meta":{}},{"name":"getTemplateData","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-getTemplateData","meta":{}},{"name":"setDisabled","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-setDisabled","meta":{}},{"name":"setElementX","tagname":"method","owner":"Sch.feature.AbstractTimeSpan","id":"method-setElementX","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Sch.feature.AbstractTimeSpan","short_doc":"Plugin for visualizing \"global\" time span in the scheduler grid, these can by styled easily using just CSS. ...","component":false,"superclasses":["Ext.AbstractPlugin"],"subclasses":["Sch.plugin.Lines","Sch.plugin.ResourceZones","Sch.plugin.Zones"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><strong>Sch.feature.AbstractTimeSpan</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Sch.plugin.Lines' rel='Sch.plugin.Lines' class='docClass'>Sch.plugin.Lines</a></div><div class='dependency'><a href='#!/api/Sch.plugin.ResourceZones' rel='Sch.plugin.ResourceZones' class='docClass'>Sch.plugin.ResourceZones</a></div><div class='dependency'><a href='#!/api/Sch.plugin.Zones' rel='Sch.plugin.Zones' class='docClass'>Sch.plugin.Zones</a></div><h4>Files</h4><div class='dependency'><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan' target='_blank'>AbstractTimeSpan.js</a></div></pre><div class='doc-contents'><p>Plugin for visualizing \"global\" time span in the scheduler grid, these can by styled easily using just CSS. This is an abstract class not intended for direct use.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-clsField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-clsField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-clsField' class='name expandable'>clsField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Name of field ...</div><div class='long'><p>Name of field</p>\n<p>Defaults to: <code>'Cls'</code></p></div></div></div><div id='cfg-headerTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-headerTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-headerTemplate' class='name expandable'>headerTemplate</a> : Ext.XTemplate<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Template used to render the header elements</p>\n</div><div class='long'><p>Template used to render the header elements</p>\n</div></div></div><div id='cfg-innerHeaderTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-innerHeaderTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-innerHeaderTpl' class='name expandable'>innerHeaderTpl</a> : String/Ext.XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A template providing additional markup to render into each timespan header element</p>\n</div><div class='long'><p>A template providing additional markup to render into each timespan header element</p>\n</div></div></div><div id='cfg-renderDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-renderDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-renderDelay' class='name expandable'>renderDelay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Delay the zones rendering by this amount (in ms) to speed up the default rendering of rows and events. ...</div><div class='long'><p>Delay the zones rendering by this amount (in ms) to speed up the default rendering of rows and events.</p>\n<p>Defaults to: <code>15</code></p></div></div></div><div id='cfg-showHeaderElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-showHeaderElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-showHeaderElements' class='name expandable'>showHeaderElements</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set this to true to show indicators in the timeline header area. ...</div><div class='long'><p>Set this to <code>true</code> to show indicators in the timeline header area.</p>\n\n<p>Header indicators are placed right above the corresponding element of the scheduling view. You can customize the HTML markup\nfor these indicators with the <a href=\"#!/api/Sch.feature.AbstractTimeSpan-cfg-headerTemplate\" rel=\"Sch.feature.AbstractTimeSpan-cfg-headerTemplate\" class=\"docClass\">headerTemplate</a> config. Note that the indicators are rendered as a regular div element,\nwhich will be styled differently in modern vs legacy browsers.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-store' class='name expandable'>store</a> : Ext.data.Store/String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A store with timespan data, or a string identifying a store.</p>\n</div><div class='long'><p>A store with timespan data, or a string identifying a store.</p>\n</div></div></div><div id='cfg-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-cfg-template' class='name expandable'>template</a> : Ext.XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Template to render the timespan elements</p>\n</div><div class='long'><p>Template to render the timespan elements</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>An internal css class which is added to each rendered timespan element</p>\n</div><div class='long'><p>An internal css class which is added to each rendered timespan element</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-generateHeaderMarkup' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-generateHeaderMarkup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-generateHeaderMarkup' class='name expandable'>generateHeaderMarkup</a>( <span class='pre'>isPrint, records</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates markup for headers elements. ...</div><div class='long'><p>Generates markup for headers elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPrint</span> : Boolean<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Array<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateMarkup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-generateMarkup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-generateMarkup' class='name expandable'>generateMarkup</a>( <span class='pre'>isPrint, records</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates markup for elements. ...</div><div class='long'><p>Generates markup for elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isPrint</span> : Boolean<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Array<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getElementCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getElementCls' class='name expandable'>getElementCls</a>( <span class='pre'>record, data</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return element class for a record. ...</div><div class='long'><p>Return element class for a record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>Data record</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Template data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getElementId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getElementId' class='name expandable'>getElementId</a>( <span class='pre'>record</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns id of element for data record. ...</div><div class='long'><p>Returns id of element for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderContainerEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderContainerEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderContainerEl' class='name expandable'>getHeaderContainerEl</a>( <span class='pre'></span> ) : Ext.dom.Element<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns container to render header elements. ...</div><div class='long'><p>Returns container to render header elements.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.dom.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementCls' class='name expandable'>getHeaderElementCls</a>( <span class='pre'>record, data</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return header element class for data record. ...</div><div class='long'><p>Return header element class for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>Data record</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementId' class='name expandable'>getHeaderElementId</a>( <span class='pre'>record</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns id of header element for data record. ...</div><div class='long'><p>Returns id of header element for data record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderElementPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getHeaderElementPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getHeaderElementPosition' class='name expandable'>getHeaderElementPosition</a>( <span class='pre'>date</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns position of header element by date. ...</div><div class='long'><p>Returns position of header element by date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTemplateData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getTemplateData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-getTemplateData' class='name expandable'>getTemplateData</a>( <span class='pre'>record</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns template data to render elements. ...</div><div class='long'><p>Returns template data to render elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>Pass <code>true</code> to disable the plugin and remove all rendered elements.</p>\n</div></li></ul></div></div></div><div id='method-setElementX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.AbstractTimeSpan'>Sch.feature.AbstractTimeSpan</span><br/><a href='source/AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-setElementX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.AbstractTimeSpan-method-setElementX' class='name expandable'>setElementX</a>( <span class='pre'>el, x</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets element X-coordinate relative direction (rtl or ltr). ...</div><div class='long'><p>Sets element X-coordinate relative direction (rtl or ltr).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Ext.Element<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});