(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a7f635b"],{"25ff":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("Card",{attrs:{shadow:""}},[t("div",{staticClass:"message-page-con"},[t("div",{staticClass:"message-category-con"},[t("Menu",{attrs:{width:"auto","active-name":"unread"},on:{"on-select":e.handleSelect}},[t("MenuItem",{attrs:{name:"unread"}},[t("span",{staticClass:"category-title"},[e._v("未读消息")]),t("Badge",{staticStyle:{"margin-left":"10px"},attrs:{count:e.messageUnreadCount}})],1),t("MenuItem",{attrs:{name:"readed"}},[t("span",{staticClass:"category-title"},[e._v("已读消息")]),t("Badge",{staticStyle:{"margin-left":"10px"},attrs:{"class-name":"gray-dadge",count:e.messageReadedCount}})],1),t("MenuItem",{attrs:{name:"trash"}},[t("span",{staticClass:"category-title"},[e._v("回收站")]),t("Badge",{staticStyle:{"margin-left":"10px"},attrs:{"class-name":"gray-dadge",count:e.messageTrashCount}})],1)],1)],1),t("div",{staticClass:"message-list-con"},[e.listLoading?t("Spin",{attrs:{fix:"",size:"large"}}):e._e(),t("Menu",{class:e.titleClass,attrs:{width:"auto","active-name":""},on:{"on-select":e.handleView}},e._l(e.messageList,(function(s){return t("MenuItem",{key:"msg_".concat(s.msg_id),attrs:{name:s.msg_id}},[t("div",[t("p",{staticClass:"msg-title"},[e._v(e._s(s.title))]),t("Badge",{attrs:{status:"default",text:s.create_time}}),t("Button",{directives:[{name:"show",rawName:"v-show",value:"unread"!==e.currentMessageType,expression:"currentMessageType !== 'unread'"}],staticStyle:{float:"right","margin-right":"20px"},style:{display:s.loading?"inline-block !important":""},attrs:{loading:s.loading,size:"small",icon:"readed"===e.currentMessageType?"md-trash":"md-redo",title:"readed"===e.currentMessageType?"删除":"还原",type:"text"},nativeOn:{click:function(t){return t.stopPropagation(),e.removeMsg(s)}}})],1)])})),1)],1),t("div",{staticClass:"message-view-con"},[e.contentLoading?t("Spin",{attrs:{fix:"",size:"large"}}):e._e(),t("div",{staticClass:"message-view-header"},[t("h2",{staticClass:"message-view-title"},[e._v(e._s(e.showingMsgItem.title))]),t("time",{staticClass:"message-view-time"},[e._v(e._s(e.showingMsgItem.create_time))])]),t("div",{domProps:{innerHTML:e._s(e.messageContent)}})],1)])])},n=[],i=s("5530"),r=(s("7db0"),s("d3b7"),s("2f62")),o={unread:"messageUnreadList",readed:"messageReadedList",trash:"messageTrashList"},d={name:"message_page",data:function(){return{listLoading:!0,contentLoading:!1,currentMessageType:"unread",messageContent:"",showingMsgItem:{}}},computed:Object(i["a"])(Object(i["a"])({},Object(r["e"])({messageUnreadList:function(e){return e.user.messageUnreadList},messageReadedList:function(e){return e.user.messageReadedList},messageTrashList:function(e){return e.user.messageTrashList},messageList:function(){return this[o[this.currentMessageType]]},titleClass:function(){return{"not-unread-list":"unread"!==this.currentMessageType}}})),Object(r["c"])(["messageUnreadCount","messageReadedCount","messageTrashCount"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["d"])([])),Object(r["b"])(["getContentByMsgId","getMessageList","hasRead","removeReaded","restoreTrash"])),{},{stopLoading:function(e){this[e]=!1},handleSelect:function(e){this.currentMessageType=e},handleView:function(e){var t=this;this.contentLoading=!0,this.getContentByMsgId({msg_id:e}).then((function(s){t.messageContent=s;var a=t.messageList.find((function(t){return t.msg_id===e}));a&&(t.showingMsgItem=a),"unread"===t.currentMessageType&&t.hasRead({msg_id:e}),t.stopLoading("contentLoading")})).catch((function(){t.stopLoading("contentLoading")}))},removeMsg:function(e){e.loading=!0;var t=e.msg_id;"readed"===this.currentMessageType?this.removeReaded({msg_id:t}):this.restoreTrash({msg_id:t})}}),mounted:function(){var e=this;this.listLoading=!0,this.getMessageList().then((function(){return e.stopLoading("listLoading")})).catch((function(){return e.stopLoading("listLoading")}))}},g=d,c=(s("8edb"),s("2877")),u=Object(c["a"])(g,a,n,!1,null,null,null);t["default"]=u.exports},"8edb":function(e,t,s){"use strict";s("cf52")},cf52:function(e,t,s){}}]);