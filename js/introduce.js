'use strict';
// 项目经验
/*function isShowInit(){
	let page2Box = document.getElementsByClassName("section-4")[0];
	//判断page2Box是否在可视区中；
	function getRect(obj){
        return obj.getBoundingClientRect();
    }
    if(getRect(page2Box).top < document.documentElement.clientHeight-60){
        console.log("在可视区域里了1111",getRect(page2Box).top,document.documentElement.clientHeight);
        return true;
    }else{        
        console.log("没在可视区域中",getRect(page2Box).top,document.documentElement.clientHeight);
        return false;
    }
}
//页面一进来先执行一次；
//isShowInit();
//在浏览器页面滚动时都要执行启动函数：
window.onscroll = window.onresize = isShowInit; 

mousewheel(document,isShowInit,isShowInit)*/

function introduce(){
	

	let iBox = document.getElementById("i-box");
	//console.log(iBox);
	let shakeEles = iBox.children;
	//console.log(shakeEles);
	for( let i = 0; i < shakeEles.length; i++ ){
		shake(shakeEles[i],"left",25);
		shakeEles[i].onclick = function(){
			shake(shakeEles[i],"left",25);
			//isShowInit();
		}
	}
}

introduce();























