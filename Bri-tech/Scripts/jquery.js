"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c,d){"use strict";var e={init:function(c,d){this.options=a.extend({},a.fn.singlePageNav.defaults,c),this.container=d,this.$container=a(d),this.$links=this.$container.find("a"),""!==this.options.filter&&(this.$links=this.$links.filter(this.options.filter)),this.$window=a(b),this.$htmlbody=a("html, body"),this.$links.on("click.singlePageNav",a.proxy(this.handleClick,this)),this.didScroll=!1,this.checkPosition(),this.setTimer()},handleClick:function(b){var d=this,e=b.currentTarget,f=a(e.hash);b.preventDefault(),f.length&&(d.clearTimer(),"function"==typeof d.options.beforeStart&&d.options.beforeStart(),d.setActiveLink(e.hash),d.scrollTo(f,function(){d.options.updateHash&&(c.location.hash=e.hash),d.setTimer(),"function"==typeof d.options.onComplete&&d.options.onComplete()}))},scrollTo:function(a,b){var c=this,d=c.getCoords(a).top,e=!1;c.$htmlbody.stop().animate({scrollTop:d},{duration:c.options.speed,easing:c.options.easing,complete:function(){"function"!=typeof b||e||b(),e=!0}})},setTimer:function(){var a=this;a.$window.on("scroll.singlePageNav",function(){a.didScroll=!0}),a.timer=setInterval(function(){a.didScroll&&(a.didScroll=!1,a.checkPosition())},250)},clearTimer:function(){clearInterval(this.timer),this.$window.off("scroll.singlePageNav"),this.didScroll=!1},checkPosition:function(){var a=this.$window.scrollTop(),b=this.getCurrentSection(a);this.setActiveLink(b)},getCoords:function(a){return{top:Math.round(a.offset().top)-this.options.offset}},setActiveLink:function(a){var b=this.$container.find("a[href='"+a+"']");b.hasClass(this.options.currentClass)||(this.$links.removeClass(this.options.currentClass),b.addClass(this.options.currentClass))},getCurrentSection:function(b){var c,d,e,f;for(c=0;c<this.$links.length;c++)d=this.$links[c].hash,a(d).length&&(e=this.getCoords(a(d)),b>=e.top-this.options.threshold&&(f=d));return f||this.$links[0].hash}};a.fn.singlePageNav=function(a){return this.each(function(){var b=Object.create(e);b.init(a,this)})},a.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"current",easing:"swing",updateHash:!1,filter:"",onComplete:!1,beforeStart:!1}}(jQuery,window,document);