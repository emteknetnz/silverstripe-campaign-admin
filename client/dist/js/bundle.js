!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t){e.exports=React},function(e,t){e.exports=SilverStripeComponent},function(e,t){e.exports=i18n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SET_CAMPAIGN_ACTIVE_CHANGESET:"SET_CAMPAIGN_ACTIVE_CHANGESET",SET_CAMPAIGN_SELECTED_CHANGESETITEM:"SET_CAMPAIGN_SELECTED_CHANGESETITEM",PUBLISH_CAMPAIGN_REQUEST:"PUBLISH_CAMPAIGN_REQUEST",PUBLISH_CAMPAIGN_SUCCESS:"PUBLISH_CAMPAIGN_SUCCESS",PUBLISH_CAMPAIGN_FAILURE:"PUBLISH_CAMPAIGN_FAILURE",SET_NEW_CAMPAIGN:"SET_NEW_CAMPAIGN",REMOVE_CAMPAIGN_ITEM_REQUEST:"REMOVE_CAMPAIGN_ITEM_REQUEST",REMOVE_CAMPAIGN_ITEM_SUCCESS:"REMOVE_CAMPAIGN_ITEM_SUCCESS",REMOVE_CAMPAIGN_ITEM_FAILURE:"REMOVE_CAMPAIGN_ITEM_FAILURE"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return{type:c.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM,payload:{changeSetItemId:e}}}function i(e,t){return function(n){n({type:c.default.SET_CAMPAIGN_ACTIVE_CHANGESET,payload:{campaignId:e,view:t}})}}function o(e,t,n){return function(a){a({type:c.default.PUBLISH_CAMPAIGN_REQUEST,payload:{campaignId:n}}),e({id:n}).then(function(e){a({type:c.default.PUBLISH_CAMPAIGN_SUCCESS,payload:{campaignId:n}}),a({type:p.default.FETCH_RECORD_SUCCESS,payload:{recordType:t,data:e}})}).catch(function(e){a({type:c.default.PUBLISH_CAMPAIGN_FAILURE,payload:{error:e}})})}}function s(e){return{type:c.default.SET_NEW_CAMPAIGN,payload:{newItem:e}}}function l(e,t,n){return function(a){return a({type:c.default.REMOVE_CAMPAIGN_ITEM_REQUEST,payload:{campaignId:t,itemId:n}}),e({id:t,itemId:n}).then(function(){a({type:c.default.REMOVE_CAMPAIGN_ITEM_SUCCESS,payload:{campaignId:t,itemId:n}})}).catch(function(e){a({type:c.default.REMOVE_CAMPAIGN_ITEM_FAILURE,payload:{error:e}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectChangeSetItem=r,t.showCampaignView=i,t.publishCampaign=o,t.setNewItem=s,t.removeCampaignItem=l;var u=n(3),c=a(u),d=n(31),p=a(d)},function(e,t){e.exports=Breadcrumb},function(e,t){e.exports=BreadcrumbsActions},function(e,t){e.exports=FormAction},function(e,t){e.exports=Injector},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactRouter},function(e,t){e.exports=RecordsActions},function(e,t){e.exports=Redux},function(e,t){e.exports=Toolbar},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(10),i=n(24),o=a(i),s=n(8),l=a(s),u=n(30),c=a(u),d=n(17),p=a(d),f=n(20),m=a(f),h=n(15),g=a(h);document.addEventListener("DOMContentLoaded",function(){var e=o.default.getSection("SilverStripe\\CampaignAdmin\\CampaignAdmin");c.default.add({path:e.url,component:(0,r.withRouter)(p.default),childRoutes:[{path:":type/:id/:view",component:p.default},{path:"set/:id/:view",component:p.default}]}),l.default.reducer.register("campaign",m.default),(0,g.default)()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=function(){r.default.transform("add-to-campaign",function(e){e.form.alterSchema("*.AddToCampaign",function(e){if(!e.getFieldByName("AddNewSelect"))return e.getState();var t=e.getValue("AddNewSelect");return e.setFieldClass("NewTitle","show",t).setFieldClass("NewTitle","hide",!t).getState()})})};t.default=i},function(e,t,n){"use strict";n(14)},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=null,a=e.config.sections.find(function(e){return e.name===V});if(t.params.id>0){var r=a.form.campaignEditForm.schemaUrl+"/"+t.params.id,i=e.form.formSchemas[r],o=i&&i.name,s=o&&(0,h.formValueSelector)(i.name,b.default);n=s&&s(e,"Name")}return{config:e.config,campaignId:e.campaign.campaignId,view:e.campaign.view,breadcrumbs:e.breadcrumbs,sectionConfig:a,securityId:e.config.SecurityID,title:n}}function u(e){return{breadcrumbsActions:(0,g.bindActionCreators)(S,e),campaignActions:(0,g.bindActionCreators)(I,e),recordActions:(0,g.bindActionCreators)(P,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignAdminBase=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(0),f=r(p),m=n(9),h=n(32),g=n(12),v=n(10),_=n(35),b=r(_),y=n(23),C=r(y),E=n(4),I=a(E),A=n(6),S=a(A),k=n(11),P=a(k),T=n(5),w=r(T),N=n(1),R=r(N),M=n(7),O=r(M),B=n(2),x=r(B),j=n(13),G=r(j),L=n(26),U=r(L),D=n(19),F=r(D),V="SilverStripe\\CampaignAdmin\\CampaignAdmin",H=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={loading:!1};var a={SecurityID:n.props.securityId};return n.publishApi=C.default.createEndpointFetcher(c({},n.props.sectionConfig.publishEndpoint,{defaultData:a,payloadSchema:{id:{urlReplacement:":id",remove:!0}}})),n.removeCampaignItemApi=C.default.createEndpointFetcher(c({},n.props.sectionConfig.removeCampaignItemEndpoint,{defaultData:a,payloadSchema:{id:{urlReplacement:":id",remove:!0},itemId:{urlReplacement:":itemId",remove:!0}}})),n.handleBackButtonClick=n.handleBackButtonClick.bind(n),n.handleCreateCampaignSubmit=n.handleCreateCampaignSubmit.bind(n),n.handleFormAction=n.handleFormAction.bind(n),n.detectErrors=n.detectErrors.bind(n),n.handleRemoveCampaignItem=n.handleRemoveCampaignItem.bind(n),n}return s(t,e),d(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.breadcrumbs,n=e.title,a=e.params,r=a.view,i=a.id;0===t.length&&this.setBreadcrumbs(r,i,n)}},{key:"componentWillReceiveProps",value:function(e){var t=e.title,n=e.params,a=n.id,r=n.view;(this.props.params.id!==a||this.props.params.view!==r||this.props.title!==t)&&this.setBreadcrumbs(r,a,t)}},{key:"setBreadcrumbs",value:function(e,t,n){var a=[{text:x.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];switch(e){case"show":break;case"edit":a.push({text:n,href:this.getActionRoute(t,e)});break;case"create":a.push({text:x.default._t("CampaignAdmin.ADD_CAMPAIGN","Add Campaign"),href:this.getActionRoute(t,e)})}this.props.breadcrumbsActions.setBreadcrumbs(a)}},{key:"handleBackButtonClick",value:function(e){if(this.props.breadcrumbs.length>1){var t=this.props.breadcrumbs[this.props.breadcrumbs.length-2];t&&t.href&&(e.preventDefault(),this.props.router.push(t.href))}}},{key:"handleCreateCampaignSubmit",value:function(e,t,n){var a=this,r=n();if(!r)throw new Error("Promise was not returned for submitting");return r.then(function(e){var n=a.detectErrors(e);if("action_save"===t&&!n){var r=a.props.sectionConfig.url,i=e.record.id;a.props.campaignActions.setNewItem(i),a.props.router.push(r+"/set/"+i+"/show")}return e})}},{key:"handleFormAction",value:function(e){if("action_cancel"===e.currentTarget.name){var t=this.props.sectionConfig.url;this.props.router.push(t),e.preventDefault()}}},{key:"render",value:function(){var e=null;switch(this.props.params.view){case"show":e=this.renderItemListView();break;case"edit":e=this.renderDetailEditView();break;case"create":e=this.renderCreateView();break;default:e=this.renderIndexView()}return e}},{key:"renderIndexView",value:function(){var e=this.props.sectionConfig.form.EditForm.schemaUrl,t={title:x.default._t("CampaignAdmin.ADDCAMPAIGN"),icon:"plus",extraClass:"btn-primary",handleClick:this.addCampaign.bind(this)},n={createFn:this.campaignListCreateFn.bind(this),schemaUrl:e,identifier:"Campaign.IndexView"};return f.default.createElement("div",{className:"fill-height","aria-expanded":"true"},f.default.createElement(G.default,null,f.default.createElement(w.default,{multiline:!0})),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow"},f.default.createElement("div",{className:"toolbar toolbar--content"},f.default.createElement("div",{className:"btn-toolbar"},f.default.createElement(O.default,t))),f.default.createElement(U.default,n)))}},{key:"renderItemListView",value:function(){var e={sectionConfig:this.props.sectionConfig,campaignId:this.props.params.id,itemListViewEndpoint:this.props.sectionConfig.itemListViewEndpoint,publishApi:this.publishApi,handleBackButtonClick:this.handleBackButtonClick.bind(this),onRemoveCampaignItem:this.handleRemoveCampaignItem,loading:this.state.loading};return f.default.createElement(F.default,e)}},{key:"handleRemoveCampaignItem",value:function(e,t){var n=this,a=x.default._t("CampaignAdmin.REMOVE_ITEM_MESSAGE","Are you sure you want to remove this item?\n\nBy removing this item all linked items will be removed unless used elsewhere.");return window.confirm(a)?(this.setState({loading:!0}),this.removeCampaignItem(e,t).then(this.fetchCampaignsList.bind(this)).then(function(){return n.setState({loading:!1})}).then(function(){n.props.campaignActions.selectChangeSetItem(null),window.document.body.click()})):null}},{key:"removeCampaignItem",value:function(e,t){return this.props.campaignActions.removeCampaignItem(this.removeCampaignItemApi,e,t)}},{key:"fetchCampaignsList",value:function(){var e=this.props.sectionConfig.readCampaignsEndpoint,t=e.url;return this.props.recordActions.fetchRecords(this.props.sectionConfig.treeClass,e.method,t)}},{key:"renderDetailEditView",value:function(){if(this.props.params.id<=0)return this.renderCreateView();var e=this.props.sectionConfig.form.campaignEditForm.schemaUrl,t=e+"/"+this.props.params.id;return f.default.createElement("div",{className:"fill-height"},f.default.createElement(G.default,{showBackButton:!0,handleBackButtonClick:this.handleBackButtonClick},f.default.createElement(w.default,{multiline:!0})),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},f.default.createElement(U.default,{handleAction:this.handleFormAction,schemaUrl:t,identifier:"Campaign.EditView"})))}},{key:"renderCreateView",value:function(){var e=this.props.sectionConfig.form.campaignCreateForm.schemaUrl;return f.default.createElement("div",{className:"fill-height"},f.default.createElement(G.default,{showBackButton:!0,handleBackButtonClick:this.handleBackButtonClick},f.default.createElement(w.default,{multiline:!0})),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},f.default.createElement(U.default,{handleSubmit:this.handleCreateCampaignSubmit,handleAction:this.handleFormAction,schemaUrl:e,identifier:"Campaign.CreateView"})))}},{key:"detectErrors",value:function(e){return!(!e.errors||!e.errors.length)||!(!e.state||!e.state.messages)||!!(e.state&&e.state.fields&&e.state.fields.find(function(e){return e.message}))}},{key:"campaignEditCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{handleClick:function(e){e.preventDefault(),n.props.router.push(a)}});return f.default.createElement(e,c({key:t.id},r))}return f.default.createElement(e,c({key:t.id},t))}},{key:"campaignAddCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{handleClick:function(e){e.preventDefault(),n.props.router.push(a)}});return f.default.createElement(e,c({key:t.name},r))}return f.default.createElement(e,c({key:t.name},t))}},{key:"campaignListCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("GridField"===t.schemaComponent){var r=Object.assign({},t,{data:Object.assign({},t.data,{handleDrillDown:function(e,t){n.props.router.push(a+"/set/"+t.ID+"/show")},handleEditRecord:function(e,t){n.props.router.push(a+"/set/"+t+"/edit")}})});return f.default.createElement(e,c({key:r.name},r))}return f.default.createElement(e,c({key:t.name},t))}},{key:"addCampaign",value:function(){var e=this.getActionRoute(0,"create");this.props.router.push(e)}},{key:"getActionRoute",value:function(e,t){return this.props.sectionConfig.url+"/set/"+e+"/"+t}}]),t}(R.default);H.propTypes={breadcrumbsActions:f.default.PropTypes.object.isRequired,campaignId:f.default.PropTypes.string,sectionConfig:f.default.PropTypes.shape({publishEndpoint:f.default.PropTypes.shape({url:f.default.PropTypes.string,method:f.default.PropTypes.string}),form:f.default.PropTypes.shape({EditForm:f.default.PropTypes.shape({schemaUrl:f.default.PropTypes.string}),campaignEditForm:f.default.PropTypes.shape({schemaUrl:f.default.PropTypes.string}),campaignCreateForm:f.default.PropTypes.shape({schemaUrl:f.default.PropTypes.string})})}),securityId:f.default.PropTypes.string.isRequired,view:f.default.PropTypes.string};var q=H;t.CampaignAdminBase=q,t.default=(0,v.withRouter)((0,m.connect)(l,u)(H))},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=a(l),c=n(1),d=a(c),p=n(2),f=a(p),m=n(29),h=n(34),g=a(h),v=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"getNumReferTo",value:function(){return this.props.item._links&&this.props.item._links.references&&this.props.item._links.references.length||0}},{key:"getNumReferredBy",value:function(){return this.props.item._links&&this.props.item._links.referenced_by&&this.props.item._links.referenced_by.length||0}},{key:"getReferToTooltipText",value:function(){var e=this.getNumReferTo();return f.default.sprintf(f.default._t("CampaignAdmin.LINKED_TO","Requires %s item(s)"),(0,g.default)(e))}},{key:"getReferredByTooltipText",value:function(){var e=this.getNumReferredBy();return f.default.sprintf(f.default._t("CampaignAdmin.LINKED_FROM","Required by %s item(s)"),(0,g.default)(e))}},{key:"render",value:function(){var e=null,t={},n=this.props.item;if("open"===this.props.campaign.State)switch(n.ChangeType){case"created":t.className="badge badge-warning list-group-item__status",t.Title=f.default._t("CampaignAdmin.DRAFT","Draft");break;case"modified":t.className="badge badge-warning list-group-item__status",t.Title=f.default._t("CampaignAdmin.MODIFIED","Modified");break;case"deleted":t.className="badge badge-error list-group-item__status",t.Title=f.default._t("CampaignAdmin.REMOVED","Removed");break;case"none":default:t.className="badge badge-success list-group-item__status",t.Title=f.default._t("CampaignAdmin.NO_CHANGES","No changes")}var a=this.renderLinks();return n.Thumbnail&&(e=u.default.createElement("span",{className:"list-group-item__thumbnail"},u.default.createElement("img",{alt:n.Title,src:n.Thumbnail}))),u.default.createElement("div",{className:"fill-width"},e,u.default.createElement("div",{className:"list-group-item__details"},u.default.createElement("h4",{className:"list-group-item__heading"},n.Title),a,t.className&&t.Title&&u.default.createElement("span",{className:t.className},t.Title)))}},{key:"renderLinks",value:function(){var e=this.getNumReferTo(),t=this.getNumReferredBy(),n=[];e>0&&n.push(this.getReferToTooltipText()),t>0&&n.push(f.default.sprintf(0===n.length?this.getReferredByTooltipText():this.getReferredByTooltipText().toLocaleLowerCase(),(0,g.default)(t)));var a=u.default.createElement(m.Tooltip,{id:"campaign-tooltip-"+this.props.item.ID},n.join(", ")),r=null;if(this.props.selected&&e+t>0||this.props.isLinked){var i=["list-group-item__info","campaign-admin__item-links",this.props.isLinked?"campaign-admin__item-links--is-linked":"campaign-admin__item-links--has-links"];r=u.default.createElement("div",{className:i.join(" ")},u.default.createElement(m.OverlayTrigger,{placement:"left",overlay:a},u.default.createElement("span",null,u.default.createElement("span",{className:"campaign-admin__item-links__number"},e+t),u.default.createElement("span",{className:"font-icon-link"}))))}return r}}]),t}(d.default);v.propTypes={campaign:u.default.PropTypes.object.isRequired,item:u.default.PropTypes.object.isRequired,isLinked:u.default.PropTypes.bool},t.default=v},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n=t.sectionConfig.treeClass,a=parseInt(t.campaignId,10),r=e.records[n]||[],i=r.find(function(e){return e.ID===a})||{};return{config:e.config,record:i,campaign:e.campaign,treeClass:n,newItem:e.campaign.newItem}}function c(e){return{breadcrumbsActions:(0,g.bindActionCreators)(b,e),recordActions:(0,g.bindActionCreators)(C,e),campaignActions:(0,g.bindActionCreators)(I,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.CampaignAdminList=void 0;var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,a)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(a):void 0},m=n(0),h=r(m),g=n(12),v=n(9),_=n(6),b=a(_),y=n(11),C=a(y),E=n(4),I=a(E),A=n(1),S=r(A),k=n(21),P=r(k),T=n(22),w=r(T),N=n(27),R=r(N),M=n(13),O=r(M),B=n(7),x=r(B),j=n(18),G=r(j),L=n(5),U=r(L),D=n(28),F=r(D),V=n(2),H=r(V),q=n(33),W=r(q),Q=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePublish=n.handlePublish.bind(n),n.handleItemSelected=n.handleItemSelected.bind(n),n.setBreadcrumbs=n.setBreadcrumbs.bind(n),n.handleCloseItem=n.handleCloseItem.bind(n),n.handleRemoveItem=n.handleRemoveItem.bind(n),n.isRecordLoaded(e)?n.state={loading:!1}:n.state={loading:!0},n}return l(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props.itemListViewEndpoint.url.replace(/:id/,this.props.campaignId);f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this),this.setBreadcrumbs(),this.isRecordLoaded()||this.props.recordActions.fetchRecord(this.props.treeClass,"get",n).then(function(){e.setBreadcrumbs(),e.setState({loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.campaignActions.setNewItem(null)}},{key:"isRecordLoaded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return 0!==Object.keys(e.record).length}},{key:"setBreadcrumbs",value:function(){if(this.props.record){var e=[{text:H.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];e.push({text:this.props.record.Name,href:this.props.sectionConfig.url+"/set/"+this.props.campaignId+"/show"}),this.props.breadcrumbsActions.setBreadcrumbs(e)}}},{key:"getSelectedItem",value:function(){var e=this.props.campaign.changeSetItemId,t=this.getItems()||[],n=null;if(e&&(n=t.find(function(t){return e===t.ID})),!n){var a=this.groupItemsForSet(),r=Object.keys(a).find(function(e){return a[e]&&a[e].items.length>0});n=r?a[r].items[0]:null}return n}},{key:"render",value:function(){var e=this,t=this.props.campaign.changeSetItemId,n=null,a=t?"":"campaign-admin__campaign--hide-preview",r=this.props.campaignId,i=this.props.record,o=this.props.newItem,s=this.groupItemsForSet(),l=[],u=this.getSelectedItem(),c=u&&u._links&&u._links.references||[],d=u&&u._links&&u._links.referenced_by||[];Object.keys(s).forEach(function(a){var o=s[a],u=o.items.length,p=[],f="\n        "+(0===u?"":u)+"\n        "+(1===u?o.singular:o.plural)+"\n      ",m="Set_"+r+"_Group_"+a;o.items.forEach(function(a){t||(t=a.ID);var r=t===a.ID;r&&a._links&&(n=a._links);var o=[];"none"!==a.ChangeType&&"published"!==i.State||o.push("list-group-item--inactive"),r&&o.push("active");var s=!!c.find(function(e){return e.ChangeSetItemID===parseInt(a.ID,10)});s=s||d.find(function(e){return e.ChangeSetItemID===a.ID}),p.push(h.default.createElement(R.default,{key:a.ID,className:o.join(" "),handleClick:e.handleItemSelected,handleClickArg:a.ID},h.default.createElement(G.default,{item:a,campaign:e.props.record,selected:r,isLinked:s})))});var g=(0,W.default)("list-group-wrapper",{"list-group-wrapper--empty":0===p.length});l.push(h.default.createElement("div",{className:g,key:m},h.default.createElement(w.default,{groupid:m,title:f},p.length>0?p:h.default.createElement("p",{className:"list-group-item"},o.noItemsText))))});var p=o?h.default.createElement("p",{className:"alert alert-success alert--no-border",role:"alert"},H.default._t("CampaignAdmin.NEWCAMPAIGNSUCCESS","Nice one! You have successfully created a campaign.")):null,f=h.default.createElement(P.default,null,l),m=["panel","panel--padded","panel--scrollable","flexbox-area-grow"],g=this.props.loading&&[h.default.createElement("div",{key:"overlay",className:"cms-content-loading-overlay ui-widget-overlay-light"}),h.default.createElement("div",{key:"spinner",className:"cms-content-loading-spinner"})];return h.default.createElement("div",{className:"fill-width campaign-admin__campaign "+a},g,h.default.createElement("div",{className:"fill-height campaign-admin__campaign-items","aria-expanded":"true"},h.default.createElement(O.default,{showBackButton:!0,handleBackButtonClick:this.props.handleBackButtonClick},h.default.createElement(U.default,{multiline:!0})),p,h.default.createElement("div",{className:m.join(" ")},f),h.default.createElement("div",{className:"toolbar toolbar--south"},this.renderButtonToolbar())),this.renderPreview(n,t))}},{key:"renderPreview",value:function(e,t){var n=null,a=(0,W.default)(["flexbox-area-grow","fill-height","preview","campaign-admin__campaign-preview","campaign-admin__campaign-preview--empty"]);if(this.state.loading)n=h.default.createElement("div",{className:a},h.default.createElement("p",null,H.default._t("CampaignAdmin.LOADING","Loading...")));else if(this.getItems()&&0!==this.getItems().length)n=h.default.createElement(F.default,{itemLinks:e,itemId:t,onBack:this.handleCloseItem,moreActions:this.getMoreActions()});else{var r=H.default._t("CampaignAdmin.SELECTFROMSECTIONS",'Select "Add to Campaign" from pages, files, and other admin sections with content types');n=h.default.createElement("div",{className:a},h.default.createElement("h2",{className:"campaign-admin__empty-heading"},"Getting started"),h.default.createElement("p",{className:"campaign-admin__empty-info"},r))}return n}},{key:"getMoreActions",value:function(){var e=this.getSelectedItem();if(!e)return null;var t=e._links.referenced_by&&e._links.referenced_by.length||0,n=H.default._t("CampaignAdmin.UNREMOVEABLE_INFO","Required by {number} item(s), and cannot be removed directly.");return["explicitly"===e.Added?h.default.createElement("button",{key:"remove_action",className:"btn btn-secondary action",onClick:this.handleRemoveItem},"Remove"):h.default.createElement("p",{key:"unremoveable_info",className:"alert alert-info campaign-admin__unremoveable-item"},h.default.createElement("span",{className:"font-icon-link"}),H.default.inject(n,{number:t}))]}},{key:"handleRemoveItem",value:function(){"function"==typeof this.props.onRemoveCampaignItem&&this.props.onRemoveCampaignItem(this.props.campaignId,this.getSelectedItem().ID)}},{key:"handleItemSelected",value:function(e,t){this.props.campaignActions.selectChangeSetItem(t)}},{key:"handleCloseItem",value:function(){this.props.campaignActions.selectChangeSetItem(null)}},{key:"renderButtonToolbar",value:function(){var e=this.getItems(),t=null;return e&&0!==e.length?"open"===this.props.record.State&&(t={title:H.default._t("CampaignAdmin.PUBLISHCAMPAIGN","Publish campaign"),buttonStyle:"primary",loading:this.props.campaign.isPublishing,handleClick:this.handlePublish,icon:"rocket"}):t={title:H.default._t("CampaignAdmin.PUBLISHCAMPAIGN","Publish campaign"),buttonStyle:"secondary-outline",icon:"rocket",disabled:!0},t?h.default.createElement("div",{className:"btn-toolbar"},h.default.createElement(x.default,t)):null}},{key:"getItems",value:function(){return this.props.record&&this.props.record._embedded?this.props.record._embedded.items:null}},{key:"groupItemsForSet",value:function(){var e=this.getPlaceholderGroups(),t=this.getItems();return t?(t.forEach(function(t){var n=t.BaseClass;e[n]||(e[n]={singular:t.Singular,plural:t.Plural,items:[]}),e[n].items.push(t)}),e):e}},{key:"getPlaceholderGroups",value:function(){var e={};return this.props.record&&this.props.record.placeholderGroups&&this.props.record.placeholderGroups.forEach(function(t){e[t.baseClass]=d({},t),e[t.baseClass].items=[].concat(i(t.items))}),e}},{key:"handlePublish",value:function(e){e.preventDefault(),this.props.campaignActions.publishCampaign(this.props.publishApi,this.props.treeClass,this.props.campaignId)}}]),t}(S.default);Q.propTypes={campaign:h.default.PropTypes.shape({isPublishing:h.default.PropTypes.bool.isRequired,changeSetItemId:h.default.PropTypes.number}),breadcrumbsActions:h.default.PropTypes.object.isRequired,campaignActions:h.default.PropTypes.object.isRequired,publishApi:h.default.PropTypes.func.isRequired,record:h.default.PropTypes.object.isRequired,recordActions:h.default.PropTypes.object.isRequired,sectionConfig:h.default.PropTypes.object.isRequired,handleBackButtonClick:h.default.PropTypes.func,onRemoveCampaignItem:h.default.PropTypes.func},t.CampaignAdminList=Q,t.default=(0,v.connect)(u,c)(Q)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case u.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM:return(0,s.default)(Object.assign({},e,{changeSetItemId:t.payload.changeSetItemId}));case u.default.SET_CAMPAIGN_ACTIVE_CHANGESET:return(0,s.default)(Object.assign({},e,{campaignId:t.payload.campaignId,view:t.payload.view,changeSetItemId:null}));case u.default.PUBLISH_CAMPAIGN_REQUEST:return(0,s.default)(Object.assign({},e,{isPublishing:!0}));case u.default.PUBLISH_CAMPAIGN_SUCCESS:case u.default.PUBLISH_CAMPAIGN_FAILURE:return(0,s.default)(Object.assign({},e,{isPublishing:!1}));case u.default.SET_NEW_CAMPAIGN:return(0,s.default)(i({},e,{newItem:t.payload.newItem}));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(25),s=a(o),l=n(3),u=a(l),c=(0,s.default)({campaignId:null,changeSetItemId:null,isPublishing:!1,view:null,newItem:null});t.default=r},function(e,t){e.exports=Accordion},function(e,t){e.exports=AccordionBlock},function(e,t){e.exports=Backend},function(e,t){e.exports=Config},function(e,t){e.exports=DeepFreezeStrict},function(e,t){e.exports=FormBuilderLoader},function(e,t){e.exports=ListGroupItem},function(e,t){e.exports=Preview},function(e,t){e.exports=ReactBootstrap},function(e,t){e.exports=ReactRouteRegister},function(e,t){e.exports=RecordsActionTypes},function(e,t){e.exports=ReduxForm},function(e,t){e.exports=classnames},function(e,t){e.exports=formatWrittenNumber},function(e,t){e.exports=getFormState}]);