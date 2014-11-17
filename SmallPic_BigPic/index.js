window.onload=function(){
	var oDiv=document.getElementById('playImg');
	var bigUl=getClass(oDiv,'big_pic')[0];
	var bigLi=bigUl.getElementsByTagName('li');
	var smallUl=getClass(oDiv,'smallPic')[0].getElementsByTagName('ul')[0];
	var smallLi=smallUl.getElementsByTagName('li');
	var inow=0;
	var iMiniZindex=2;

	var prev=document.getElementById('btn_prev');
	var next=document.getElementById('btn_next');

	prev.onmouseover=function(){
		startMove(this,'opacity',100);
	}
	prev.onmouseout=function(){
		startMove(this,'opacity',0);
	}
	next.onmouseover=function(){
		startMove(this,'opacity',100);
	}
	next.onmouseout=function(){
		startMove(this,'opacity',0);
	}

	smallUl.style.width=smallLi.length*smallLi[0].offsetWidth+"px";
	for(var i=0;i<smallLi.length;i++){
		smallLi[i].index=i;

		smallLi[i].onmouseover=function(){
			startMove(this,'opacity',100);
		}

		smallLi[i].onmouseout=function(){
			if(this.index!=inow){
				startMove(this,'opacity',60);
			}
			
		}
		smallLi[i].onclick=function(){
			if(this.index==inow) return ;
			inow=this.index;
			tab();
		}
	}

	function tab(){
		for(var i=0;i<smallLi.length;i++){
			startMove(smallLi[i],'opacity',60);
		}
		startMove(smallLi[inow],'opacity',100);
		bigLi[inow].style.zIndex=iMiniZindex++;
		bigLi[inow].style.width=0;

		if(inow==0){
			startMove(smallUl,'left',0);
		}
		else if(inow==smallLi.length-1){
			startMove(smallUl,'left',-(inow-2)*smallLi[0].offsetWidth);
		}else{
			startMove(smallUl,'left',-(inow-1)*smallLi[0].offsetWidth);
		}
		startMove(bigLi[inow],'width',bigUl.offsetWidth);
	}

	prev.onclick=function(){
		inow--;
		if(inow==-1){
			inow=smallLi.length-1;
		}
		tab();
	}
	 next.onclick=function(){
	 	inow++;
	 	if(inow==smallLi.length-1){
	 		inow=0;
	 	}
	 	tab();
	 }
}