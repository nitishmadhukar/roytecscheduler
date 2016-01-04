Ext.data.JsonP.Sch_model_Range({"tagname":"class","name":"Sch.model.Range","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Range.js","href":"Range.html#Sch-model-Range"}],"extends":"Sch.model.Customizable","aliases":{},"alternateClassNames":[],"mixins":[],"requires":["Sch.util.Date"],"uses":[],"members":[{"name":"clsField","tagname":"cfg","owner":"Sch.model.Range","id":"cfg-clsField","meta":{}},{"name":"customizableFields","tagname":"cfg","owner":"Sch.model.Range","id":"cfg-customizableFields","meta":{}},{"name":"endDateField","tagname":"cfg","owner":"Sch.model.Range","id":"cfg-endDateField","meta":{}},{"name":"nameField","tagname":"cfg","owner":"Sch.model.Range","id":"cfg-nameField","meta":{}},{"name":"startDateField","tagname":"cfg","owner":"Sch.model.Range","id":"cfg-startDateField","meta":{}},{"name":"__editCounter","tagname":"property","owner":"Sch.model.Customizable","id":"property-__editCounter","meta":{"private":true}},{"name":"__editing","tagname":"property","owner":"Sch.model.Customizable","id":"property-__editing","meta":{"private":true}},{"name":"idProperty","tagname":"property","owner":"Sch.model.Range","id":"property-idProperty","meta":{"private":true}},{"name":"previous","tagname":"property","owner":"Sch.model.Customizable","id":"property-previous","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.model.Customizable","id":"method-constructor","meta":{}},{"name":"beginEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-beginEdit","meta":{"private":true}},{"name":"cancelEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-cancelEdit","meta":{"private":true}},{"name":"endEdit","tagname":"method","owner":"Sch.model.Customizable","id":"method-endEdit","meta":{"private":true}},{"name":"forEachDate","tagname":"method","owner":"Sch.model.Range","id":"method-forEachDate","meta":{}},{"name":"fullCopy","tagname":"method","owner":"Sch.model.Range","id":"method-fullCopy","meta":{"private":true}},{"name":"getCls","tagname":"method","owner":"Sch.model.Range","id":"method-getCls","meta":{}},{"name":"getDates","tagname":"method","owner":"Sch.model.Range","id":"method-getDates","meta":{}},{"name":"getEndDate","tagname":"method","owner":"Sch.model.Range","id":"method-getEndDate","meta":{}},{"name":"getName","tagname":"method","owner":"Sch.model.Range","id":"method-getName","meta":{}},{"name":"getStartDate","tagname":"method","owner":"Sch.model.Range","id":"method-getStartDate","meta":{}},{"name":"isValid","tagname":"method","owner":"Sch.model.Range","id":"method-isValid","meta":{"private":true}},{"name":"onClassExtended","tagname":"method","owner":"Sch.model.Customizable","id":"method-onClassExtended","meta":{"private":true}},{"name":"reject","tagname":"method","owner":"Sch.model.Customizable","id":"method-reject","meta":{"private":true}},{"name":"set","tagname":"method","owner":"Sch.model.Customizable","id":"method-set","meta":{"private":true}},{"name":"setCls","tagname":"method","owner":"Sch.model.Range","id":"method-setCls","meta":{}},{"name":"setEndDate","tagname":"method","owner":"Sch.model.Range","id":"method-setEndDate","meta":{}},{"name":"setName","tagname":"method","owner":"Sch.model.Range","id":"method-setName","meta":{}},{"name":"setStartDate","tagname":"method","owner":"Sch.model.Range","id":"method-setStartDate","meta":{}},{"name":"setStartEndDate","tagname":"method","owner":"Sch.model.Range","id":"method-setStartEndDate","meta":{}},{"name":"shift","tagname":"method","owner":"Sch.model.Range","id":"method-shift","meta":{}}],"code_type":"ext_define","id":"class-Sch.model.Range","short_doc":"This class represent a simple date range. ...","component":false,"superclasses":["Ext.data.Model","Sch.model.Customizable"],"subclasses":["Sch.model.Event"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='docClass'>Sch.model.Customizable</a><div class='subclass '><strong>Sch.model.Range</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sch.util.Date' rel='Sch.util.Date' class='docClass'>Sch.util.Date</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Sch.model.Event' rel='Sch.model.Event' class='docClass'>Sch.model.Event</a></div><h4>Files</h4><div class='dependency'><a href='source/Range.html#Sch-model-Range' target='_blank'>Range.js</a></div></pre><div class='doc-contents'><p>This class represent a simple date range. It is being used in various subclasses and plugins which operate on date ranges.</p>\n\n<p>Its a subclass of the <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a>, which is in turn subclass of Ext.data.Model.\nPlease refer to documentation of those classes to become familar with the base interface of this class.</p>\n\n<p>A range has the following fields:</p>\n\n<ul>\n<li><code>StartDate</code>   - start date of the task in the ISO 8601 format</li>\n<li><code>EndDate</code>     - end date of the task in the ISO 8601 format (not inclusive)</li>\n<li><code>Name</code>        - an optional name of the range</li>\n<li><code>Cls</code>         - an optional CSS class to be associated with the range.</li>\n</ul>\n\n\n<p>The name of any field can be customized in the subclass. Please refer to <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a> for details.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-clsField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-cfg-clsField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-cfg-clsField' class='name expandable'>clsField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the field that holds the range \"class\" value (usually corresponds to a CSS class). ...</div><div class='long'><p>The name of the field that holds the range \"class\" value (usually corresponds to a CSS class). Defaults to \"Cls\".</p>\n<p>Defaults to: <code>'Cls'</code></p></div></div></div><div id='cfg-customizableFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-cfg-customizableFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-cfg-customizableFields' class='name expandable'>customizableFields</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The array of customizale fields definitions. ...</div><div class='long'><p>The array of customizale fields definitions.</p>\n<p>Defaults to: <code>[{name: 'StartDate', type: 'date', dateFormat: 'c'}, {name: 'EndDate', type: 'date', dateFormat: 'c'}, {name: 'Cls', type: 'string'}, {name: 'Name', type: 'string'}]</code></p><p>Overrides: <a href=\"#!/api/Sch.model.Customizable-cfg-customizableFields\" rel=\"Sch.model.Customizable-cfg-customizableFields\" class=\"docClass\">Sch.model.Customizable.customizableFields</a></p></div></div></div><div id='cfg-endDateField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-cfg-endDateField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-cfg-endDateField' class='name expandable'>endDateField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the field that defines the range end date. ...</div><div class='long'><p>The name of the field that defines the range end date. Defaults to \"EndDate\".</p>\n<p>Defaults to: <code>'EndDate'</code></p></div></div></div><div id='cfg-nameField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-cfg-nameField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-cfg-nameField' class='name expandable'>nameField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the field that defines the range name. ...</div><div class='long'><p>The name of the field that defines the range name. Defaults to \"Name\".</p>\n<p>Defaults to: <code>'Name'</code></p></div></div></div><div id='cfg-startDateField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-cfg-startDateField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-cfg-startDateField' class='name expandable'>startDateField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the field that defines the range start date. ...</div><div class='long'><p>The name of the field that defines the range start date. Defaults to \"StartDate\".</p>\n<p>Defaults to: <code>'StartDate'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__editCounter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-__editCounter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-__editCounter' class='name expandable'>__editCounter</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>To support nested beginEdit calls (see 043_nested_beginedit.t.js in Gantt) ...</div><div class='long'><p>To support nested beginEdit calls (see 043_nested_beginedit.t.js in Gantt)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-__editing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-__editing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-__editing' class='name expandable'>__editing</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>temp flag to check if we're currently editing the model</p>\n</div><div class='long'><p>temp flag to check if we're currently editing the model</p>\n</div></div></div><div id='property-idProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-property-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-property-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Id'</code></p></div></div></div><div id='property-previous' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-property-previous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-property-previous' class='name expandable'>previous</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Keeps temporary state of the previous state for a model, but is only available\nwhen a model has changed, e.g. ...</div><div class='long'><p>Keeps temporary state of the previous state for a model, but is only available\nwhen a model has changed, e.g. after 'set' or 'reject'. After those operations are completed, this property is cleared.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.model.Customizable-method-constructor' class='name expandable'>Sch.model.Range</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.model.Customizable\" rel=\"Sch.model.Customizable\" class=\"docClass\">Sch.model.Customizable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beginEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-beginEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-beginEdit' class='name expandable'>beginEdit</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-cancelEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-cancelEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-cancelEdit' class='name expandable'>cancelEdit</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-endEdit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-endEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-endEdit' class='name expandable'>endEdit</a>( <span class='pre'>silent, modifiedFieldNames</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to clear the previous record field values. ...</div><div class='long'><p>Overridden to be able to clear the previous record field values. Must be done here to have access to the 'previous' object after\nan endEdit call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>silent</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>modifiedFieldNames</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-forEachDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-forEachDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-forEachDate' class='name expandable'>forEachDate</a>( <span class='pre'>func, scope</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Iterates over the results from getDates ...</div><div class='long'><p>Iterates over the results from <a href=\"#!/api/Sch.model.Range-method-getDates\" rel=\"Sch.model.Range-method-getDates\" class=\"docClass\">getDates</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'><p>The function to call for each date</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope to use for the function call</p>\n</div></li></ul></div></div></div><div id='method-fullCopy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-fullCopy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-fullCopy' class='name expandable'>fullCopy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-getCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-getCls' class='name expandable'>getCls</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the \"class\" of the range ...</div><div class='long'><p>Gets the \"class\" of the range</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>cls The \"class\" of the range</p>\n</div></li></ul></div></div></div><div id='method-getDates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-getDates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-getDates' class='name expandable'>getDates</a>( <span class='pre'></span> ) : Date[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of dates in this range. ...</div><div class='long'><p>Returns an array of dates in this range. If the range starts/ends not at the beginning of day, the whole day will be included.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEndDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-getEndDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-getEndDate' class='name expandable'>getEndDate</a>( <span class='pre'></span> ) : Date<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the range end date ...</div><div class='long'><p>Returns the range end date</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The end date</p>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the name of the range ...</div><div class='long'><p>Gets the name of the range</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>name The \"name\" of the range</p>\n</div></li></ul></div></div></div><div id='method-getStartDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-getStartDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-getStartDate' class='name expandable'>getStartDate</a>( <span class='pre'></span> ) : Date<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the range start date ...</div><div class='long'><p>Returns the range start date</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The start date</p>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Simple check if end date is greater than start date ...</div><div class='long'><p>Simple check if end date is greater than start date</p>\n</div></div></div><div id='method-onClassExtended' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-onClassExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-onClassExtended' class='name expandable'>onClassExtended</a>( <span class='pre'>cls, data, hooks</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>hooks</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-reject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-reject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-reject' class='name expandable'>reject</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to track previous record field values ...</div><div class='long'><p>Overridden to be able to track previous record field values</p>\n</div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.model.Customizable' rel='Sch.model.Customizable' class='defined-in docClass'>Sch.model.Customizable</a><br/><a href='source/Customizable.html#Sch-model-Customizable-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Customizable-method-set' class='name expandable'>set</a>( <span class='pre'>fieldName, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Overridden to be able to track previous record field values ...</div><div class='long'><p>Overridden to be able to track previous record field values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-setCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-setCls' class='name expandable'>setCls</a>( <span class='pre'>cls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the \"class\" of the range ...</div><div class='long'><p>Sets the \"class\" of the range</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : String<div class='sub-desc'><p>The new class of the range</p>\n</div></li></ul></div></div></div><div id='method-setEndDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-setEndDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-setEndDate' class='name expandable'>setEndDate</a>( <span class='pre'>date, keepDuration</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the range end date ...</div><div class='long'><p>Sets the range end date</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'><p>The new end date</p>\n</div></li><li><span class='pre'>keepDuration</span> : Boolean<div class='sub-desc'><p>Pass <code>true</code> to keep the duration of the task (\"move\" the event), <code>false</code> to change the duration (\"resize\" the event).\nDefaults to <code>false</code></p>\n</div></li></ul></div></div></div><div id='method-setName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-setName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-setName' class='name expandable'>setName</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the \"name\" of the range ...</div><div class='long'><p>Sets the \"name\" of the range</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The new name of the range</p>\n</div></li></ul></div></div></div><div id='method-setStartDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-setStartDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-setStartDate' class='name expandable'>setStartDate</a>( <span class='pre'>date, keepDuration</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the range start date ...</div><div class='long'><p>Sets the range start date</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'><p>The new start date</p>\n</div></li><li><span class='pre'>keepDuration</span> : Boolean<div class='sub-desc'><p>Pass <code>true</code> to keep the duration of the task (\"move\" the event), <code>false</code> to change the duration (\"resize\" the event).\nDefaults to <code>false</code></p>\n</div></li></ul></div></div></div><div id='method-setStartEndDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-setStartEndDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-setStartEndDate' class='name expandable'>setStartEndDate</a>( <span class='pre'>start, end</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the event start and end dates ...</div><div class='long'><p>Sets the event start and end dates</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Date<div class='sub-desc'><p>The new start date</p>\n</div></li><li><span class='pre'>end</span> : Date<div class='sub-desc'><p>The new end date</p>\n</div></li></ul></div></div></div><div id='method-shift' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.model.Range'>Sch.model.Range</span><br/><a href='source/Range.html#Sch-model-Range-method-shift' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.model.Range-method-shift' class='name expandable'>shift</a>( <span class='pre'>unit, amount</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shift the dates for the date range by the passed amount and unit ...</div><div class='long'><p>Shift the dates for the date range by the passed amount and unit</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>unit</span> : String<div class='sub-desc'><p>The unit to shift by (e.g. range.shift(<a href=\"#!/api/Sch.util.Date-static-property-DAY\" rel=\"Sch.util.Date-static-property-DAY\" class=\"docClass\">Sch.util.Date.DAY</a>, 2); ) to bump the range 2 days forward</p>\n</div></li><li><span class='pre'>amount</span> : Number<div class='sub-desc'><p>The amount to shift</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});