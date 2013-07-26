var fixPict = {};
var j = 0;

fixPict.initialize = function(box){
	var boxObj = document.getElementById(box);
	var imgTag = boxObj.getElementsByTagName("img");
	for(i=0;i<imgTag.length;i++){
		if(imgTag[i].className.match("fixPict")){
			imgTag[i].setAttribute("id","fixPictId"+j);
			var p = new Image();
			p.src = imgTag[i].src;
			j++;
			fixPict.jump(p,j-1);
		}
	}
}

fixPict.jump = function(p,jj){
	var obj = document.getElementById("fixPictId"+jj);
	if(p.addEventListener){
		p.addEventListener("load", function(){fixPict.resizeImage(p,obj,jj)}, false);
		fixPict.resizeImage(p,obj,jj);
	} else if (p.attachEvent) {
		p.attachEvent("onload", function(){fixPict.resizeImage(p,obj,jj)});
		fixPict.resizeImage(p,obj,jj);
	} else {
		p.onload = function(){fixPict.resizeImage(p,obj,jj)};
		fixPict.resizeImage(p,obj,jj);
	}
}

fixPict.resizeImage = function(imgObj,obj,n){
	if(obj == null){
		var obj = document.getElementById("fixPictId"+n);
	}

	resizeImgName = obj.className;
	resizeW = resizeImgName.split("_")[1];
	resizeH = resizeImgName.split("_")[2];

	p = imgObj;
	if(p.height !== 0){

		//縦横の比率
		hi_p = p.width/p.height;
		hi_r = resizeW/resizeH;

		obj.src = p.src;

		//横長
		if(p.width-p.height >= 0){
			//画像の辺が足らない
			if(p.height < resizeH && p.width < resizeW){
				obj.removeAttribute("width");
				obj.removeAttribute("height");
			//画像の高さが足りない
			}else if(p.height < resizeH){
				obj.setAttribute("width",resizeW);
				obj.removeAttribute("height");
			//画像の横幅が足りない
			}else if(p.width < resizeW){
				obj.removeAttribute("width");
				ma = Math.round(((Math.round(p.height))-resizeH)/2);
				if(ma > 0){
					obj.style.marginTop = "-"+ma+"px";
				}
			//指定サイズより細いとき 
			}else if(hi_p >= hi_r){
				obj.setAttribute("height",resizeH);
				obj.removeAttribute("width");
				ma = Math.round(((Math.round(p.width*(resizeH/p.height)))-resizeW)/2);
				if(ma > 0){
					obj.style.marginLeft = "-"+ma+"px";
				}
			//指定サイズより太いとき
			}else{
				obj.setAttribute("width",resizeW);
				obj.removeAttribute("height");
				ma = Math.round(((Math.round(p.height*(resizeW/p.width)))-resizeH)/2);
				if(ma > 0){
					obj.style.marginTop = "-"+ma+"px";
				}
			}
		}
		//縦長
		else{
			//画像の辺が足らない
			if(p.height < resizeH && p.width < resizeW){
				obj.removeAttribute("width");
				obj.removeAttribute("height");
			//画像の高さが足りない
			}else if(p.height < resizeH){
				obj.setAttribute("width",resizeW);
				obj.removeAttribute("height");
			//画像の横幅が足りない
			}else if(p.width < resizeW){
				obj.removeAttribute("width");
				ma = Math.round(((Math.round(p.height))-resizeH)/2);
				if(ma > 0){
					obj.style.marginTop = "-"+ma+"px";
				}
			//指定サイズより細いとき 
			}else if(hi_p >= hi_r){
				obj.setAttribute("height",resizeH);
				obj.removeAttribute("width");
				ma = Math.round(((Math.round(p.width*(resizeH/p.height)))-resizeW)/2);
				if(ma > 0){
					obj.style.marginLeft = "-"+ma+"px";
				}
			//指定サイズより太いとき
			}else{
				obj.setAttribute("width",resizeW);
				obj.removeAttribute("height");
				ma = Math.round(((Math.round(p.height*(resizeW/p.width)))-resizeH)/2);
				if(ma > 0){
					obj.style.marginTop = "-"+ma+"px";
				}
			}
		}

		obj.parentNode.style.display = "block";
		obj.parentNode.style.overflow = "hidden";
		obj.parentNode.style.width = resizeW+"px";
		var he = Math.round(resizeW*p.height/p.width);
		if(he >= resizeH){
			obj.parentNode.style.height = resizeH+"px";
		}else{
			obj.parentNode.style.height = he+"px";
		}
	}
}
