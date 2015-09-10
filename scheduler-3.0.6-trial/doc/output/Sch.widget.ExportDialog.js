Ext.data.JsonP.Sch_widget_ExportDialog({"tagname":"class","name":"Sch.widget.ExportDialog","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ExportDialog.js","href":"ExportDialog.html#Sch-widget-ExportDialog"}],"private":true,"extends":"Ext.window.Window","aliases":{"widget":["exportdialog"]},"alternateClassNames":["Sch.widget.PdfExportDialog"],"mixins":["Sch.mixin.Localizable"],"requires":["Sch.widget.ExportDialogForm"],"uses":[],"members":[{"name":"buttonsPanel","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-buttonsPanel","meta":{}},{"name":"buttonsPanelScope","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-buttonsPanelScope","meta":{}},{"name":"dateRangeFormat","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-dateRangeFormat","meta":{}},{"name":"l10n","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-l10n","meta":{}},{"name":"progressBar","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-progressBar","meta":{}},{"name":"showFooterField","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-showFooterField","meta":{}},{"name":"showHeaderField","tagname":"cfg","owner":"Sch.widget.ExportDialog","id":"cfg-showHeaderField","meta":{}},{"name":"activeLocaleId","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-activeLocaleId","meta":{"private":true}},{"name":"cls","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-cls","meta":{"private":true}},{"name":"draggable","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-draggable","meta":{"private":true}},{"name":"frame","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-frame","meta":{"private":true}},{"name":"layout","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-layout","meta":{"private":true}},{"name":"legacyMode","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-legacyMode","meta":{"private":true}},{"name":"modal","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-modal","meta":{"private":true}},{"name":"myConfig","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-myConfig","meta":{"private":true}},{"name":"padding","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-padding","meta":{"private":true}},{"name":"plugin","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-plugin","meta":{"private":true}},{"name":"width","tagname":"property","owner":"Sch.widget.ExportDialog","id":"property-width","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-constructor","meta":{}},{"name":"L","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-L","meta":{}},{"name":"afterRender","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-afterRender","meta":{"private":true}},{"name":"applyLocale","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-applyLocale","meta":{"private":true}},{"name":"buildButtons","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-buildButtons","meta":{}},{"name":"buildForm","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-buildForm","meta":{}},{"name":"getPageFormats","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-getPageFormats","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-initComponent","meta":{"private":true}},{"name":"isLocaleApplied","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-isLocaleApplied","meta":{"private":true}},{"name":"localize","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-localize","meta":{}},{"name":"showError","tagname":"method","owner":"Sch.widget.ExportDialog","id":"method-showError","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.widget.ExportDialog","component":false,"superclasses":["Ext.window.Window"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Sch.widget.PdfExportDialog</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.window.Window<div class='subclass '><strong>Sch.widget.ExportDialog</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='docClass'>Sch.mixin.Localizable</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sch.widget.ExportDialogForm' rel='Sch.widget.ExportDialogForm' class='docClass'>Sch.widget.ExportDialogForm</a></div><h4>Files</h4><div class='dependency'><a href='source/ExportDialog.html#Sch-widget-ExportDialog' target='_blank'>ExportDialog.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Widget for export options.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-buttonsPanel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-buttonsPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-buttonsPanel' class='name expandable'>buttonsPanel</a> : Ext.Component<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Component with buttons controlling export.</p>\n</div><div class='long'><p>Component with buttons controlling export.</p>\n</div></div></div><div id='cfg-buttonsPanelScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-buttonsPanelScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-buttonsPanelScope' class='name expandable'>buttonsPanelScope</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The scope for the <a href=\"#!/api/Sch.widget.ExportDialog-cfg-buttonsPanel\" rel=\"Sch.widget.ExportDialog-cfg-buttonsPanel\" class=\"docClass\">buttonsPanel</a></p>\n</div><div class='long'><p>The scope for the <a href=\"#!/api/Sch.widget.ExportDialog-cfg-buttonsPanel\" rel=\"Sch.widget.ExportDialog-cfg-buttonsPanel\" class=\"docClass\">buttonsPanel</a></p>\n</div></div></div><div id='cfg-dateRangeFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-dateRangeFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-dateRangeFormat' class='name expandable'>dateRangeFormat</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Valid date format to be used by the date ranges fields. ...</div><div class='long'><p>Valid date format to be used by the date ranges fields.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-l10n' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-l10n' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-l10n' class='name expandable'>l10n</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A object, purposed for the class localization. ...</div><div class='long'><p>A object, purposed for the class localization. Contains the following keys/values:</p>\n\n<pre><code>        - generalError                : 'An error occured, try again.',\n        - title                       : 'Export Settings',\n        - formatFieldLabel            : 'Paper format',\n        - orientationFieldLabel       : 'Orientation',\n        - rangeFieldLabel             : 'Export range',\n        - showHeaderLabel             : 'Add page number',\n        - showFooterLabel             : 'Add footer',\n        - orientationPortraitText     : 'Portrait',\n        - orientationLandscapeText    : 'Landscape',\n        - completeViewText            : 'Complete schedule',\n        - currentViewText             : 'Current view',\n        - dateRangeText               : 'Date range',\n        - dateRangeFromText           : 'Export from',\n        - pickerText                  : 'Resize column/rows to desired value',\n        - dateRangeToText             : 'Export to',\n        - exportButtonText            : 'Export',\n        - cancelButtonText            : 'Cancel',\n        - progressBarText             : 'Exporting...',\n        - exportToSingleLabel         : 'Export as single page'\n</code></pre>\n<p>Overrides: <a href=\"#!/api/Sch.mixin.Localizable-cfg-l10n\" rel=\"Sch.mixin.Localizable-cfg-l10n\" class=\"docClass\">Sch.mixin.Localizable.l10n</a></p></div></div></div><div id='cfg-progressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-progressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-progressBar' class='name expandable'>progressBar</a> : Ext.Component<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Progress bar component.</p>\n</div><div class='long'><p>Progress bar component.</p>\n</div></div></div><div id='cfg-showFooterField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-showFooterField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-showFooterField' class='name expandable'>showFooterField</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates if showFooterField is visible in the exportdialog. ...</div><div class='long'><p>Indicates if showFooterField is visible in the exportdialog.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-showHeaderField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-cfg-showHeaderField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-cfg-showHeaderField' class='name expandable'>showHeaderField</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates if showHeaderField is visible in the exportdialog. ...</div><div class='long'><p>Indicates if showHeaderField is visible in the exportdialog.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeLocaleId' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-property-activeLocaleId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-activeLocaleId' class='name expandable'>activeLocaleId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'sch-exportdialog'</code></p></div></div></div><div id='property-draggable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-draggable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-draggable' class='name expandable'>draggable</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-frame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-frame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-frame' class='name expandable'>frame</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-layout' class='name expandable'>layout</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='property-legacyMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-property-legacyMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-legacyMode' class='name expandable'>legacyMode</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-modal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-modal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-modal' class='name expandable'>modal</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Panel settings. ...</div><div class='long'><p>Panel settings. Overridable with <a href=\"#!/api/Sch.plugin.Export-cfg-exportDialogConfig\" rel=\"Sch.plugin.Export-cfg-exportDialogConfig\" class=\"docClass\">Sch.plugin.Export.exportDialogConfig</a></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-myConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-myConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-myConfig' class='name expandable'>myConfig</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-padding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-padding' class='name expandable'>padding</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-plugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-plugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-plugin' class='name expandable'>plugin</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Private</p>\n</div><div class='long'><p>Private</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-property-width' class='name expandable'>width</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>350</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.widget.ExportDialog-method-constructor' class='name expandable'>Sch.widget.ExportDialog</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.widget.ExportDialog\" rel=\"Sch.widget.ExportDialog\" class=\"docClass\">Sch.widget.ExportDialog</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.widget.ExportDialog\" rel=\"Sch.widget.ExportDialog\" class=\"docClass\">Sch.widget.ExportDialog</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-L' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-method-L' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-L' class='name expandable'>L</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is shorthand reference to localize. ...</div><div class='long'><p>This is shorthand reference to <a href=\"#!/api/Sch.mixin.Localizable-method-localize\" rel=\"Sch.mixin.Localizable-method-localize\" class=\"docClass\">localize</a>. Retrieves translation of a phrase.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-applyLocale' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-method-applyLocale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-applyLocale' class='name expandable'>applyLocale</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-buildButtons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-buildButtons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-buildButtons' class='name expandable'>buildButtons</a>( <span class='pre'>buttonsScope</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Create Dialog's buttons. ...</div><div class='long'><p>Create Dialog's buttons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonsScope</span> : Object<div class='sub-desc'><p>Scope for the buttons.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>buttons Object containing buttons for Exporting/Cancelling export.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>showprogressbar</li></ul></div></div></div><div id='method-buildForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-buildForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-buildForm' class='name expandable'>buildForm</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.widget.ExportDialogForm\" rel=\"Sch.widget.ExportDialogForm\" class=\"docClass\">Sch.widget.ExportDialogForm</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Build the Sch.widget.ExportDialogForm for the dialog window. ...</div><div class='long'><p>Build the <a href=\"#!/api/Sch.widget.ExportDialogForm\" rel=\"Sch.widget.ExportDialogForm\" class=\"docClass\">Sch.widget.ExportDialogForm</a> for the dialog window.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Config object for the form, containing field names and values.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.widget.ExportDialogForm\" rel=\"Sch.widget.ExportDialogForm\" class=\"docClass\">Sch.widget.ExportDialogForm</a></span><div class='sub-desc'><p>form</p>\n</div></li></ul></div></div></div><div id='method-getPageFormats' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-getPageFormats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-getPageFormats' class='name expandable'>getPageFormats</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li>showprogressbar</li><li>updateprogressbar</li></ul></div></div></div><div id='method-isLocaleApplied' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-method-isLocaleApplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-isLocaleApplied' class='name expandable'>isLocaleApplied</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-localize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable.html#Sch-mixin-Localizable-method-localize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-localize' class='name expandable'>localize</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves translation of a phrase. ...</div><div class='long'><p>Retrieves translation of a phrase. There is a shorthand <a href=\"#!/api/Sch.mixin.Localizable-method-L\" rel=\"Sch.mixin.Localizable-method-L\" class=\"docClass\">L</a> for this method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-showError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.widget.ExportDialog'>Sch.widget.ExportDialog</span><br/><a href='source/ExportDialog.html#Sch-widget-ExportDialog-method-showError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.widget.ExportDialog-method-showError' class='name expandable'>showError</a>( <span class='pre'>dialog, [error]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Displays error message in the dialog. ...</div><div class='long'><p>Displays error message in the dialog. When it's called, both form and buttons are hidden.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dialog</span> : <a href=\"#!/api/Sch.widget.ExportDialog\" rel=\"Sch.widget.ExportDialog\" class=\"docClass\">Sch.widget.ExportDialog</a><div class='sub-desc'><p>Dialog window or null</p>\n</div></li><li><span class='pre'>error</span> : String (optional)<div class='sub-desc'><p>Text of the message that will be displayed in the dialog. If not provided, generalError\nwill be used.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});