childRes = Class.create();
childRes.prototype = {
	initialize: function(){
		this.h4 = $$("div.talkRes h4");
		Event.observe($("talkResAll"), "click", this.setAllClick.bindAsEventListener(this));
		
		for(i=0;i<this.h4.length;i++){
			Event.observe(this.h4[i], "mouseover", this.titleMouseover.bindAsEventListener(this));
			Event.observe(this.h4[i], "mouseout", this.titleMouseout.bindAsEventListener(this));
			Event.observe(this.h4[i], "click", this.titleClick.bindAsEventListener(this,i+1));
		}
	},
	setAllClick: function(event){
		element = Event.findElement(event,"a");
		if(!Element.hasClassName(element,"dammy")){
			for(i=0;i<this.h4.length;i++){
				this.closeChildRes("talkResD"+(i+1));
			}
			Element.addClassName(element,"dammy");
			element.innerHTML = "本文を全て表示";
		}else{
			for(i=0;i<this.h4.length;i++){
				this.openChildRes("talkResD"+(i+1));
			}
			Element.removeClassName(element,"dammy");
			element.innerHTML = "本文を全て非表示";
		}
		Event.stop(event);
	},
	titleClick: function(event,i){
		//element = Event.findElement(event,"h4");
		var item = $("talkResD"+i);
		if(!Element.hasClassName(item,"hid")){
			this.closeChildRes(item);
		}else{
			this.openChildRes(item);
		}

		Event.stop(event);
	},
	titleMouseover: function(event){
		element = Event.findElement(event,"h4");
		Element.setStyle(element,{"background":"#feff99"});
		Event.stop(event);
	},
	titleMouseout: function(event){
		element = Event.findElement(event,"h4");
		if(Element.hasClassName(element.parentNode,"rescheck")){
			Element.setStyle(element,{"background":"#eee"});
		}else{
			Element.setStyle(element,{"background":"#f8f8f8"});
		}
		Event.stop(event);
	},
	closeChildRes: function(element){
		Element.addClassName(element,"hid");
	},
	openChildRes: function(element){
		Element.removeClassName(element,"hid");
	}
}



showComment = Class.create();
showComment.prototype = {
	initialize: function(){
		var _m_img = $$("div#maincontent img");
		for(i=0;i<_m_img.length;i++){
			var m_img = _m_img[i];
			var relAttribute = String(m_img.getAttribute("rel"));
			if(relAttribute.toLowerCase().match("comment")){
				Event.observe(m_img, "mouseover", this.commentMouseover.bindAsEventListener(this));
				Event.observe(m_img, "mouseout", this.commentMouseout.bindAsEventListener(this));
			}
		}
	},
	commentMouseover: function(event){
		element = Event.findElement(event,"img");
		var box = document.createElement('div');
		box.className = "showComment";
		box.innerHTML = element.getAttribute("title");

		Element.makePositioned(element.parentNode);
		Element.setStyle(box,{"position":"absolute","top":"-25px","left":"0"});
		element.parentNode.appendChild(box);

		Event.stop(event);
	},
	commentMouseout: function(event){
		element = Event.findElement(event,"img");
		var aaa = element.parentNode.className;
		var ele = $$("."+aaa+" div");

		for(i=0;i<ele.length;i++){
			if(Element.hasClassName(ele[i],"showComment")){
				Element.remove(ele[i]);
			}
		}

/*
		for(i=0;i<element.parentNode.childNodes.length;i++){
			var ele = element.parentNode.childNodes[i];
			if(Element.hasClassName(ele,"showCommnet")){
				alert(ele);
			}
		}

		element.parentNode.childNodes.length
		element.parentNode.removeChild[1];
		alert(element.parentNode.childNodes.length);
*/
		Event.stop(event);
	}
}
