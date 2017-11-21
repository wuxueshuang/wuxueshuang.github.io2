'use strict';
// 项目经验
/*function isShowInit(){
	let page4Box = document.getElementsByClassName("section-4")[0];
	//判断page4Box是否在可视区中；
	function getRect(obj){
        return obj.getBoundingClientRect();
    }
    if(getRect(page4Box).top < document.documentElement.clientHeight-60){
        console.log("在可视区域里了1111",getRect(page4Box).top,document.documentElement.clientHeight);
        return true;
    }else{        
        console.log("没在可视区域中",getRect(page4Box).top,document.documentElement.clientHeight);
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
		shake(shakeEles[i],"left",50);
		shakeEles[i].onclick = function(){
			shake(shakeEles[i],"left",50);
			//isShowInit();
		}
	}
}

introduce();























