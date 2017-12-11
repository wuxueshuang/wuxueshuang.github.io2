window.onload = function(){
	window.location.hash= 1;
	var list = document.getElementsByClassName("listcus")[0];
	var lis = list.getElementsByTagName("li");
	console.log(lis);
	//let baseW = document.documentElement.clientWidth/4;//可视区域的宽/当前导航按钮的数量 = 一个导航按钮所占的宽
	//console.log(baseW);
	//设置导航栏右侧四个栏目的位置
	for( var i = 0; i < lis.length; i++ ){
		lis[i].style.left = i*25+ "%";
	}
	



	function isShowInit(){
		let page2Box = document.getElementsByClassName("section-2")[0];
		//判断page2Box是否在可视区中；
		function getRect(obj){
	        return obj.getBoundingClientRect();
	    }
	    if(Math.floor(getRect(page2Box).top) <= Math.floor(document.documentElement.clientHeight)&&Math.floor(getRect(page2Box).top) > 0){
	        //console.log("在可视区域里了1111",Math.floor(Math.abs(getRect(page2Box).top)),document.documentElement.clientHeight);
	        introduce();
	        //console.log("我执行了");        
	        return true;
	    }else{        
	        //console.log("没在可视区域中",Math.floor(Math.abs(getRect(page2Box).top)),document.documentElement.clientHeight);
	        return false;
	    }
	}
	//抖动效果
	function introduce(){	
		let iBox = document.getElementById("i-box");
		let shakeEles = iBox.children;
		for( let i = 0; i < shakeEles.length; i++ ){
			shake(shakeEles[i],"left",25);
			shakeEles[i].onclick = function(){
				shake(shakeEles[i],"left",25);
			}
		}
	}


	let iNow = 0;//记录哈希值
	//此处引用：鼠标滚轮mousewheel插件
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
	var i=0;
	let t = $(function(){
		
		var $btn = $('.section-btn li'),
			$wrap = $('.section-wrap'),
			$arrow = $('.arrow');
		
		/*当前页面赋值*/
		function up(){i++;if(i==$btn.length){i=0};iNow++;window.location.hash=iNow + 1;}
		function down(){i--;if(i<0){i=$btn.length-1};iNow--;window.location.hash=iNow + 1;}


		/*页面滑动*/
		function run(){
			$btn.eq(i).addClass('on').siblings().removeClass('on');	
			$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
			iNow = i;
			window.location.hash=iNow + 1;
			//console.log("huadongle");
			isShowInit();
		};
		
		/*右侧按钮点击*/
		$btn.each(function(index) {
			$(this).click(function(){
				i=index;
				run();
			})
		});
		
		/*翻页按钮点击*/
		$arrow.one('click',go);
		function go(){
			up();run();	
			//isShowInit();
			setTimeout(function(){$arrow.one('click',go)},500)
		};
		
		/*响应鼠标*/
		$wrap.one('mousewheel',mouse_);
		function mouse_(event){
			if(event.deltaY<0) {up()}
			else{down()}
			run();
			isShowInit();
			setTimeout(function(){$wrap.one('mousewheel',mouse_)},500)
		};
		
		/*响应键盘上下键*/
		$(document).one('keydown',k);
		function k(event){
			var e=event||window.event;
			var key=e.keyCode||e.which||e.charCode;
			switch(key)	{
				case 38: down();run();	
				break;
				case 40: up();run();	
				break;
			};
			setTimeout(function(){$(document).one('keydown',k)},500);
		}
		return {
			up:up,
			down:down,
			run:run,
			go:go
		}
	});


	//头部导航栏点击事件
	$("#box li").each((index,item) =>{
		$(item).on("click",function(){
			//console.log(item,index);
			//console.log($("item div"));
			//$("")
			$("item div").css("transform","rotateX(-180deg)");
			$("item div").css("transition",null);
			$("item span").css("transform","rotateX(90deg)");
			$("item span").css("transition",null);
			i = index;
			iNow = i;
			window.location.hash=iNow + 1;
			$('.section-btn li').eq(i).addClass('on').siblings().removeClass('on');	
			$('.section-wrap').attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
		});
	});

	//播放视频
	var myPlayer = videojs('my-video');
	videojs("my-video").ready(function(){
		var myPlayer = this;
		myPlayer.play();
	});


}