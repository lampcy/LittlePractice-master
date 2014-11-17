function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function getClass(oParent,className){
	var oDiv=oParent.getElementsByTagName('*');
	var result=[];
	for(var i=0;i<oDiv.length;i++){
		if(oDiv[i].className==className){
			result.push(oDiv[i]);
		}
	}
	return result;
}
function startMove(obj,attr,target){
	clearInterval(obj.timer);

	obj.timer=setInterval(function(){
		var iCur=0;
		if(attr=='opacity'){
			iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
		}else{
			iCur=parseInt(getStyle(obj,attr));
		}

		var iSpeed=(target-iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

		if(iCur==target){
			clearInterval(obj.timer);
		}else{
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