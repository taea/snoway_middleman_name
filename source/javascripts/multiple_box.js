<!--
// セレクトボックスのリストを移動
//// 引数（フォーム, 移動元セレクトボックス名, 移動先セレクトボックス名）
function fnMoveSelect(fm, sel1, sel2) {
	for (i = 0; i < fm[sel1].length; i++) {
		if (fm[sel1].options[i].selected) {
			fm[sel2].options[fm[sel2].length] = new Option(fm[sel1].options[i].text, fm[sel1].options[i].value);
			fm[sel1].options[fm[sel1].selectedIndex] = null;
			i--;
		}
	}
}

// セレクトボックスのリストを全選択・全選択解除
//// 引数（フォーム, セレクトボックス名, モード)
function fnSelectBoxAll(fm, sel, mode) {
	for (i = 0; i < fm[sel].options.length; i++) {
		if (mode == "select") {
			fm[sel].options[i].selected = true;
		} else {
			fm[sel].options[i].selected = false;
		}
	}
}
-->
