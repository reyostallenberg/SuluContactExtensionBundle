define(["sulucontact/components/accounts/edit/main","services/sulucontactextension/account-header","services/sulucontactextension/account-router","services/sulucontactextension/account-manager"],function(a,b,c,d){"use strict";var e,f=function(){},g=function(){},h=function(a){this.sandbox.emit("sulu.header.toolbar.item.loading","settings"),d.convertAccount(this.data.id,a).then(function(a){this.data=a,this.sandbox.emit("sulu.header.toolbar.item.enable","settings",!0),b.setHeader.call(this,this.data),this.sandbox.emit("sulu.header.toolbar.items.set","settings",b.getItemsForConvertOperation.call(this,this.data))}.bind(this))};return f.prototype=a,f.prototype.constructor=f,e=new f,g.prototype=new f,g.prototype.constructor=g,g.prototype.header=function(){var a=e.header.call(this);return this.data.id&&(a.toolbar.buttons.settings={options:{dropdownItems:b.getItemsForConvertOperation.call(this,this.data)}}),a},g.prototype.loadComponentData=function(){var a=$.Deferred();return e.loadComponentData.call(this).then(function(c){this.options.accountType&&(c.type=b.getAccountTypeIdByTypeName(this.options.accountType)),a.resolve(c)}.bind(this)),a},g.prototype.initialize=function(){e.initialize.call(this),b.setHeader.call(this,this.data)},g.prototype.toList=function(){var a=b.getAccountType(this.data);c.toList(a.name)},g.prototype.bindCustomEvents=function(){e.bindCustomEvents.call(this),this.sandbox.on("sulu.contacts.account.convert",h.bind(this))},new g});