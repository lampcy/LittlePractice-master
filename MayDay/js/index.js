window.onload=function(){
	var bigImg=document.getElementById('img');
	var bigImgLi=bigImg.getElementsByTagName('li');
	var numUl=document.getElementById('num');
	var numLi=numUl.getElementsByTagName('li');

	var prev=document.getElementById('prev');
	var next=document.getElementById('next');

	var oDiv=document.getElementById('top');
	var smallPic=getClass(oDiv,'smallPic')[0];
	var smallUl=smallPic.getElementsByTagName('ul')[0];
	var smallLi=smallUl.getElementsByTagName('li');
	var inow=0;
	var iIndex=0;

	// 图片轮播
	for(var i=0;i<numLi.length;i++){
		numLi[i].index=i;
		iIndex=this.index;
		var iIndex=0;

		numLi[i].onmouseover=function(){
			iIndex=this.index;
			tab();
		}
	}
	
	function tab(){
		for(var i=0;i<numLi.length;i++){
			numLi[i].className="";
			bigImgLi[i].style.opacity="0";
			bigImgLi[i].style.filter="alpha(opacity=0)";
		}
		numLi[iIndex].className="hover";
		startMove(bigImgLi[iIndex],'opacity',100);
	}

	function autoPlay(){
		iIndex++;
		if(iIndex==bigImgLi.length){
			iIndex=0;
		}
		tab();
	}

	var timer=window.setInterval(autoPlay,2000);
	img.onmouseover=function(){
		window.clearInterval(timer);
	}
	img.onmouseout=function(){
		timer=window.setInterval(autoPlay,2000);
	}
	
	// 专辑介绍部分轮播
	smallUl.style.width=smallUl.offsetWidth*2+"px";
	prev.onclick=function(){
		var smallUlRight=parseInt(getStyle(smallUl,'right'));
		if(smallUlRight!=0){
			inow=inow-smallPic.offsetWidth;
			startMove(smallUl,'left',inow);
		}	
	}

	next.onclick=function(){
		var smallUlLeft=parseInt(getStyle(smallUl,'left'));
		if(smallUlLeft!=0){
			inow=inow+smallPic.offsetWidth;
			startMove(smallUl,'left',inow);
		}	
	}
}

$(function(){
	$('.menu li').hover(function(){
		$(this).find('ul').show('nomal');
	},function(){
		$(this).find('ul').hide('nomal');
	});
})