Ext.data.JsonP.Sch_data_mixin_UniversalModelGetter({"tagname":"class","name":"Sch.data.mixin.UniversalModelGetter","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"UniversalModelGetter.js","href":"UniversalModelGetter.html#Sch-data-mixin-UniversalModelGetter"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"getModelById","tagname":"method","owner":"Sch.data.mixin.UniversalModelGetter","id":"method-getModelById","meta":{"private":true}},{"name":"getModelByInternalId","tagname":"method","owner":"Sch.data.mixin.UniversalModelGetter","id":"method-getModelByInternalId","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.data.mixin.UniversalModelGetter","short_doc":"This mixin eliminates differences between flat/tree store in get by [internal] id functionality and it should be\nmixe...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":["Sch.data.AssignmentStore"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Sch.data.mixin.UniversalModelGetter</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Sch.data.AssignmentStore' rel='Sch.data.AssignmentStore' class='docClass'>Sch.data.AssignmentStore</a></div><h4>Files</h4><div class='dependency'><a href='source/UniversalModelGetter.html#Sch-data-mixin-UniversalModelGetter' target='_blank'>UniversalModelGetter.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This mixin eliminates differences between flat/tree store in get by [internal] id functionality and it should be\nmixed into data model stores.</p>\n\n<p>It adds two methods <a href=\"#!/api/Sch.data.mixin.UniversalModelGetter-method-getModelById\" rel=\"Sch.data.mixin.UniversalModelGetter-method-getModelById\" class=\"docClass\">getModelById()</a> and <a href=\"#!/api/Sch.data.mixin.UniversalModelGetter-method-getModelByInternalId\" rel=\"Sch.data.mixin.UniversalModelGetter-method-getModelByInternalId\" class=\"docClass\">getModelByInternalId()</a>\nwhich should be used everywhere in the code instead of native getById() / getByInternalId() methods.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getModelById' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.UniversalModelGetter'>Sch.data.mixin.UniversalModelGetter</span><br/><a href='source/UniversalModelGetter.html#Sch-data-mixin-UniversalModelGetter-method-getModelById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.UniversalModelGetter-method-getModelById' class='name expandable'>getModelById</a>( <span class='pre'>id</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getModelByInternalId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.UniversalModelGetter'>Sch.data.mixin.UniversalModelGetter</span><br/><a href='source/UniversalModelGetter.html#Sch-data-mixin-UniversalModelGetter-method-getModelByInternalId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.UniversalModelGetter-method-getModelByInternalId' class='name expandable'>getModelByInternalId</a>( <span class='pre'>id</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});