let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

class dotObj{
    constructor(){

    }
    init(cx,cy){
        this.x = cx;//圆心位置
        this.y = cy;
        this.r = Math.random()*10 + 20;//半径20-30

        this.radian = Math.random()*2*Math.PI;//初始随机弧度
        this.R = Math.random()*9 + 1;//初始移动距离大圆的半径，控制扩散的松散度
        this.color = colors[ ~~(Math.random()*colors.length) ]

        this.moveX = this.R*Math.cos(this.radian);//x轴方向的移动距离
        this.moveY = this.R*Math.sin(this.radian);//y轴方向的移动距离

    }
    change(){
        this.x += this.moveX;//x轴方向圆心的移动
        this.y += this.moveY;//y轴方向圆心的移动
        //阻尼：让圆移动速度逐渐减小
        this.moveX *= 0.95
        this.moveY *= 0.95

        //让圆的半径逐渐减小
        this.r = this.r*0.92;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let dotArr = [];
var colors=['white','red','orange','yellow','green','blue','indigo','purple'];
//var colors= ["white","yellow","black","white","yellow","black"];
console.log(window.location.hash.substring(1));
let mTimer = null;
if(window.location.hash.substring(1) == 3 ){
	 setInterval(function(){
	    dotShift()//通过最后的半径删除半径<1的圆
	    dotRander()//渲染
	},30);
}else{
	clearInterval(mTimer);
	mTimer = null;
}


/*setInterval(function(){
    dotShift()//通过最后的半径删除半径<1的圆
    dotRander()//渲染
},30)*/

canvas.onmousemove = function(ev){
    console.log("我触发了1");
    let num = Math.random()*5 + 5;
    createDot(ev,num)
}

//开始滑动创建小圆点
function createDot(ev,num){
    console.log("创建");
    let cx = ev.clientX;
    let cy = ev.clientY;

    for( let i= 0; i< num; i++ ){
        initDot(cx,cy);
    }
}

//初始化小圆点
function initDot(x,y){
    let dot = new dotObj();//创建对象实例
    dot.init(x,y);//初始化小圆点，传入参数调用原型上的方法
    dotArr.push(dot)//放入原点数组中
}

//对圆进行删除。控制圆的数量
function dotShift(){
    let n = 0;//n是最终半径>1的圆的数量
    for( let i=0 , len = dotArr.length; i< len; i++ ){
        if( dotArr[i].r > 1){
            dotArr[n++] = dotArr[i]
        }
    }
    //把圆数量最多控制在500以内
    while(dotArr.length > Math.min(500,n)){
       dotArr.pop();
    }
}
//逐个渲染每个小圆；
function dotRander(){
    //清空画布
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for( let i=0 , len = dotArr.length; i< len; i++ ){
        dotArr[i].change()
        dotArr[i].draw();
    }
    console.log("渲染");
}
var swiper = new Swiper('.swiper-container', {
	effect: 'cube',
	grabCursor: true,
	autoplay: 700,
	loop:true,
	cube: {
	    shadow: true,
	    slideShadows: true,
	    shadowOffset: 20,
	    shadowScale: 0.94
	}
});