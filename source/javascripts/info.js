function copyit(theField) {
	var tempval=eval("document."+theField);
	tempval.focus();
	tempval.select();
	therange=tempval.createTextRange();
	therange.execCommand("Copy");
}
