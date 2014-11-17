//获取样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//获取类名
function getClass(oParent,className){
	var oDiv=document.getElementsByTagName('*');
	var aResult=[];
	for(var i=0;i<oDiv.length;i++){
		if(oDiv[i].className==className){
			aResult.push(oDiv[i]);
		}
	}
	return aResult;
}

//运动框架
function startMove(obj,attr,iTarget){
	window.clearInterval(obj.timer);

	obj.timer=setInterval(function(){
		var iCur=0;
		if(attr=='opacity'){
			iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
		}
		else{
			iCur=parseInt(getStyle(obj,attr));
		}

		var iSpeed=(iTarget-iCur)/5;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

		if(iCur==iTarget){
			window.clearInterval(obj.timer);
		}
		else{
			if("opacity" == attr){
				obj.style.opacity=(iCur+iSpeed)/100;
				obj.style.filter="alpha(opacity="+iCur+iSpeed+")";
			}
			else{
				obj.style[attr]=iCur+iSpeed+"px";
			}
		}
	},30);
}

