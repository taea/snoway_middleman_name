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
		if(!element.getAttribute("title")){
			return false;
		}
		var box = document.createElement('div');
		box.className = "showComment";
		box.innerHTML = htmlSpecialChars(element.getAttribute("title"));

		Element.makePositioned(element.parentNode);
		Element.setStyle(box,{"position":"absolute","top":"-30px","left":"0"});
		element.parentNode.appendChild(box);

		Event.stop(event);
	},
	commentMouseout: function(event){
		element = Event.findElement(event,"img");
		if(!element.getAttribute("title")){
			return false;
		}
		var aaa = element.parentNode.className;
		var ele = $$("."+aaa+" div");

		for(i=0;i<ele.length;i++){
			if(Element.hasClassName(ele[i],"showComment")){
				Element.remove(ele[i]);
			}
		}

		Event.stop(event);
	}
}


function htmlSpecialChars(value) {
	value = value.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;");
	//value = value.replace(/\'/g, "&#039;");
	return value;
}
