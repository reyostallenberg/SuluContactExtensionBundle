define(["services/husky/mediator","services/sulucontactextension/contact-header","services/sulucontact/contact-router"],function(a,b,c){"use strict";function d(){}var e=null;return d.prototype=c,d.prototype.constructor=d,d.prototype.toAdd=function(b){a.emit("sulu.router.navigate","contacts/contacts/add/type:"+b.type,!0,!0)},d.prototype.toList=function(b){var c="/contacts/contacts";b="all"===b?"basic":b,b&&(c+="/type:"+b),a.emit("sulu.router.navigate",c)},d.getInstance=function(){return null===e&&(e=new d),e},d.getInstance()});