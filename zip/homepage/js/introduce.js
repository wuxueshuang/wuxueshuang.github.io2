'use strict';
// 项目经验
//判断page2Box是否在可视区中
function isShowInit(){
	let page2Box = document.getElementsByClassName("section-2")[0];
	//判断page2Box是否在可视区中；
	function getRect(obj){
        return obj.getBoundingClientRect();
    }
    if(Math.floor(getRect(page2Box).top) <= Math.floor(document.documentElement.clientHeight)&&Math.floor(getRect(page2Box).top) > 0){
        //console.log("在可视区域里了1111",Math.floor(Math.abs(getRect(page2Box).top)),document.documentElement.clientHeight);
        introduce();        
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

//页面一进来先执行一次；
isShowInit();
//在浏览器页面滚动时都要执行启动函数：
window.onscroll = window.onresize = isShowInit;

mousewheel(document,isShowInit,isShowInit)

























