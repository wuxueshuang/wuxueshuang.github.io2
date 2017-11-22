$(function(){

	var imgL=$(".pic img").size();
	var deg=360/imgL;
	var roY=0,roX=-10;
	var xN=0,yN=0;
	var play=null;

	$(".pic img").each(function(i){
		$(this).css({
			<!--translateZ 定义2d旋转沿着z轴-->
			"transform":"rotateY("+i*deg+"deg) translateZ(300px)"	});
			<!--防止图片被拖拽-->
			$(this).attr('ondragstart','return false');
		});

		$(document).mousedown(function(ev){
		//ev.preventdefault();
		var x_=ev.clientX;
		var y_=ev.clientY;
		clearInterval(play);
			//console.log('我按下了');
			$(this).bind('mousemove',function(ev){
				/*获取当前鼠标的坐标*/
				var x=ev.clientX;
				var y=ev.clientY;
	            /*两次坐标之间的距离*/
	              xN=x-x_;
				  yN=y-y_;

				 roY+=xN*0.2;
				roX-=yN*0.1;
				//console.log('移动');
				//$('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');

				$('.pic').css({
	                 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
				});
				/*之前的鼠标坐标*/
	         x_=ev.clientX;
	         y_=ev.clientY;

			});
		}).mouseup(function(){
          $(this).unbind('mousemove');
          var play=setInterval(function(){
           
           xN*=0.95;
           yN*=0.95
           if(Math.abs(xN)<1 && Math.abs(yN)<1){
              clearInterval(play);
           }
            roY+=xN*0.2;
			roX-=yN*0.1;
			$('.pic').css({
                 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
			});

          },30);

	});

	function drawFire(){
		//封装一个随机颜色的函数
	    function renderColor(){
	        let color='rgb(';
	        let r = parseInt(Math.random()*256);
	        let g = parseInt(Math.random()*256);
	        let b = parseInt(Math.random()*256);
	        color=color+r+','+g+','+b+')';
	        return color
	    };


	    //定义一个类，ele为这个元素，x为x轴坐标，y为y轴坐标
	    class Fire{
	        constructor(ele,x,y){
	            this.ele=ele;
	            this.x=x;
	            this.y=y;
	            this.ele.className="oneFire";
	            document.body.appendChild(this.ele);
	        }
	        init(){
	            //初始化元素的位置为鼠标的位置
	            this.ele.style.left=this.x+'px';
	            this.ele.style.top=this.y+'px';
	            this.ele.style.background=renderColor();//每个元素随机颜色
	            this.move()
	        }
	        move(){
	            this.speedX=(parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*18);//-18~18
	            this.speedY=(parseInt(Math.random()*2)== 0 ? 1 : -1)*parseInt(Math.random()*20);//-20~20
	            this.n=1;

	            this.timer=setInterval(() =>{
	                this.n++;
	                this.L=this.ele.offsetLeft+this.speedX;
	                this.T=this.ele.offsetTop+this.speedY+this.n;//当this.speedY+this.n>0时，向下运动

	                this.ele.style.left=this.L+'px';
	                this.ele.style.top=this.T+'px';

	                //当元素移出可视区域时删除div和清除定时器
	                if(this.L+this.ele.offsetWidth>window.innerWidth|| this.L<1 || this.T+this.ele.offsetHeight>window.innerHeight || this.T<1 ){
	                    this.ele.remove();
	                    clearInterval(this.timer);
	                }
	            },30);
	        }
	    }

	    document.onclick=function(ev){
	        //生成100个小烟花
	        for(let i=0;i<100;i++){
	            let div=document.createElement('div');
	            let fire=new Fire(div,ev.pageX,ev.pageY);
	            fire.init()
	        }
	    }
	}
	drawFire();
});