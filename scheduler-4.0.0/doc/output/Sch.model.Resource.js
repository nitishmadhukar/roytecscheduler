Ext.data.JsonP.Sch_model_Resource({"tagname":"class","name":"Sch.model.Resource","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Resource.js","href":"Resource2.html#Sch-model-Resource"}],"extends":"Sch.model.Customizable","aliases":{},"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"members":[{"name":"customizableFields","tagname":"cfg","owner":"Sch.model.Resource","id":"cfg-customizableFields","meta":{}},{"name":"nameField","tagname":"cfg","owner":"Sch.model.Resource","id":"cfg-nameField","meta":{}},{"name":"__editCounter","tagname":"property","owner":"Sch.model.Customizable","id":"property-__editCounter","meta":{"private":true}},{"name":"__editing","tagname":"property","owner":"Sch.model.Customizable","id":"property-__editing","meta":{"private":true}},{"name":"idProperty","tagname":"property","owner":"Sch.model.Resource","id":"property-idProperty","meta":{"private":true}},{"name":"previous","tagname":"property","owner":"Sch.model.Customizable","id":"property-previous","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.model.Customizable","id":"method-constructor","meta":{}},{"name":"beginEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-beginEdit","meta":{"private":true}},{"name":"cancelEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-cancelEdit","meta":{"private":true}},{"name":"endEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-endEdit","meta":{"private":true}},{"name":"getAssignmentStore","tagname":"method","owner":"Sch.model.Resource","id":"method-getAssignmentStore","meta":{}},{"name":"getAssignments","tagname":"method","owner":"Sch.model.Resource","id":"method-getAssignments","meta":{}},{"name":"getEventStore","tagname":"method","owner":"Sch.model.Resource","id":"method-getEventStore","meta":{}},{"name":"getEvents","tagname":"method","owner":"Sch.model.Resource","id":"method-getEvents","meta":{}},{"name":"getInternalId","tagname":"method","owner":"Sch.model.Resource","id":"method-getInternalId","meta":{"private":true}},{"name":"getName","tagname":"method","owner":"Sch.model.Resource","id":"method-getName","meta":{}},{"name":"getResourceStore","tagname":"method","owner":"Sch.model.Resource","id":"method-getResourceStore","meta":{}},{"name":"isPersistable","tagname":"method","owner":"Sch.model.Resource","id":"method-isPersistable","meta":{}},{"name":"onClassExtended","tagname":"method","owner":"Sch.model.Customizable","id":"method-onClassExtended","meta":{"private":true}},{"name":"reject","tagname":"method","owner":"Sch.model.Customizable","id":"method-reject","meta":{"private":true}},{"name":"set","tagname":"method","owner":"Sch.model.Customizable","id":"method-set","meta":{"private":true}},{"name":"setName","tagname":"method","owner":"Sch.model.Resource","id":"method-setName","meta":{}}],"code_type":"ext_define","id":"class-Sch.model.Resource","short_doc":"This class represent a single Resource in the scheduler chart. ...","component":false,"superclasses":["Ext.data.Model","Sch.model.Customizable"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='docClass'>Sch.model.Customizable</a><div class='subclass '><strong>Sch.model.Resource</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Resource2.html#Sch-model-Resource' target='_blank'>Resource.js</a></div></pre><div class='doc-contents'><p>This class represent a single Resource in the scheduler chart. It's a subclass of the <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a>, which is in turn subclass of Ext.data.Model.\nPlease refer to documentation of those classes to become familar with the base interface of the resource.</p>\n\n<p>A Resource has only 2 mandatory fields - <code>Id</code> and <code>Name</code>. If you want to add more fields with meta data describing your resources then you should subclass this class:</p>\n\n<pre><code>Ext.define('MyProject.model.Resource', {\n    extend      : '<a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a>',\n\n    fields      : [\n        // `Id` and `Name` fields are already provided by the superclass\n        { name: 'Company',          type : 'string' }\n    ],\n\n    getCompany : function () {\n        return this.get('Company');\n    },\n    ...\n});\n</code></pre>\n\n<p>If you want to use other names for the Id and Name fields you can configure them as seen below:</p>\n\n<pre><code>Ext.define('MyProject.model.Resource', {\n    extend      : '<a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a>',\n\n    nameField   : 'UserName',\n    ...\n});\n</code></pre>\n\n<p>Please refer to <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a> for details.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-customizableFields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-cfg-customizableFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-cfg-customizableFields' class='name expandable'>customizableFields</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The array of customizale fields definitions. ...</div><div class='long'><p>The array of customizale fields definitions.</p>\n<p>Defaults to: <code>[{name: 'Name', type: 'string'}]</code></p><p>Overrides: <a href=\"#!/api/Sch.model.Customizable-cfg-customizableFields\" rel=\"Sch.model.Customizable-cfg-customizableFields\" class=\"docClass\">Sch.model.Customizable.customizableFields</a></p></div></div></div><div id='cfg-nameField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-cfg-nameField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-cfg-nameField' class='name expandable'>nameField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the field that holds the resource name. ...</div><div class='long'><p>The name of the field that holds the resource name. Defaults to \"Name\".</p>\n<p>Defaults to: <code>'Name'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__editCounter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-__editCounter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-__editCounter' class='name expandable'>__editCounter</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>To support nested beginEdit calls (see 043_nested_beginedit.t.js in Gantt) ...</div><div class='long'><p>To support nested beginEdit calls (see 043_nested_beginedit.t.js in Gantt)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-__editing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-__editing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-__editing' class='name expandable'>__editing</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>temp flag to check if we're currently editing the model</p>\n</div><div class='long'><p>temp flag to check if we're currently editing the model</p>\n</div></div></div><div id='property-idProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-property-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-property-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Id'</code></p></div></div></div><div id='property-previous' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-previous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-previous' class='name expandable'>previous</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Keeps temporary state of the previous state for a model, but is only available\nwhen a model has changed, e.g. ...</div><div class='long'><p>Keeps temporary state of the previous state for a model, but is only available\nwhen a model has changed, e.g. after 'set' or 'reject'. After those operations are completed, this property is cleared.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.model.Customizable-method-constructor' class='name expandable'>Sch.model.Resource</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beginEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-beginEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-beginEdit' class='name expandable'>beginEdit</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-cancelEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-cancelEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-cancelEdit' class='name expandable'>cancelEdit</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-endEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-endEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-endEdit' class='name expandable'>endEdit</a>( <span class='pre'>silent, modifiedFieldNames</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to clear the previous record field values. ...</div><div class='long'><p>Overridden to be able to clear the previous record field values. Must be done here to have access to the 'previous' object after\nan endEdit call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>silent</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>modifiedFieldNames</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getAssignmentStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getAssignmentStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getAssignmentStore' class='name expandable'>getAssignmentStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.data.AssignmentStore\" rel=\"Sch.data.AssignmentStore\" class=\"docClass\">Sch.data.AssignmentStore</a>|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns as assignment store this resources uses as default. ...</div><div class='long'><p>Returns as assignment store this resources uses as default. Resource must be part\nof a resource store to be able to retrieve default assignment store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.data.AssignmentStore\" rel=\"Sch.data.AssignmentStore\" class=\"docClass\">Sch.data.AssignmentStore</a>|null</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAssignments' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getAssignments' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getAssignments' class='name expandable'>getAssignments</a>( <span class='pre'></span> ) : [Sch.model.Assignment]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all assignments for the resource. ...</div><div class='long'><p>Returns all assignments for the resource. Resource must be part of the store for this method to work.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>[Sch.model.Assignment]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getEventStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getEventStore' class='name expandable'>getEventStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a>|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an event store this resource uses as default. ...</div><div class='long'><p>Returns an event store this resource uses as default. Resource must be part\nof a resource store to be able to retrieve event store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a>|null</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getEvents' class='name expandable'>getEvents</a>( <span class='pre'>[eventStore]</span> ) : <a href=\"#!/api/Sch.model.Range\" rel=\"Sch.model.Range\" class=\"docClass\">Sch.model.Range</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of events, associated with this resource ...</div><div class='long'><p>Returns an array of events, associated with this resource</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventStore</span> : <a href=\"#!/api/Sch.data.EventStore\" rel=\"Sch.data.EventStore\" class=\"docClass\">Sch.data.EventStore</a> (optional)<div class='sub-desc'><p>The event store to get events for (if a resource is bound to multiple stores)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.model.Range\" rel=\"Sch.model.Range\" class=\"docClass\">Sch.model.Range</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInternalId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getInternalId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getInternalId' class='name expandable'>getInternalId</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the resource name ...</div><div class='long'><p>Returns the resource name</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The name of the resource</p>\n</div></li></ul></div></div></div><div id='method-getResourceStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-getResourceStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-getResourceStore' class='name expandable'>getResourceStore</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a>|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a resource store this resource is part of. ...</div><div class='long'><p>Returns a resource store this resource is part of. Resource must be part\nof a resource store to be able to retrieve resource store.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.data.ResourceStore\" rel=\"Sch.data.ResourceStore\" class=\"docClass\">Sch.data.ResourceStore</a>|null</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isPersistable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-isPersistable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-isPersistable' class='name expandable'>isPersistable</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the Resource can be persisted. ...</div><div class='long'><p>Returns true if the Resource can be persisted.\nIn a flat store resource is always considered to be persistable, in a tree store resource is considered to\nbe persitable if it's parent node is persistable.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if this model can be persisted to server.</p>\n</div></li></ul></div></div></div><div id='method-onClassExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-onClassExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-onClassExtended' class='name expandable'>onClassExtended</a>( <span class='pre'>cls, data, hooks</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>hooks</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-reject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-reject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-reject' class='name expandable'>reject</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to track previous record field values ...</div><div class='long'><p>Overridden to be able to track previous record field values</p>\n</div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-set' class='name expandable'>set</a>( <span class='pre'>fieldName, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to track previous record field values ...</div><div class='long'><p>Overridden to be able to track previous record field values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Resource'>Sch.model.Resource</span><br/><a href='source/Resource2.html#Sch-model-Resource-method-setName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Resource-method-setName' class='name expandable'>setName</a>( <span class='pre'>The</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the resource name ...</div><div class='long'><p>Sets the resource name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : String<div class='sub-desc'><p>new name of the resource</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});