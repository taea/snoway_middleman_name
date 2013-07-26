function ReadFlash2(s,w,h)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">\n');
document.write('<param name="movie" value="'+s+'">\n');
document.write('<param name="quality" value="high">\n');
document.write('<embed src="'+s+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>\n');
document.write('</object>\n');
}

function ReadFlash(s,w,h,p)
{
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">\n');
if(p){
document.write('<param name="movie" value="'+s+'.swf?'+p+'">\n');
}else{
document.write('<param name="movie" value="'+s+'.swf">\n');
}
document.write('<param name="quality" value="high">\n');
document.write('<embed src="'+s+'.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>\n');
document.write('</object>\n');
}

/* 赤い風船 */
function RunFlash()
{
//縮小率を指定　100 90 80 70 60 のいずれかを指定　*縮小無しは"100"。 その他の縮小率を指定した場合、正しく表示されません。
		movieSize=88;
////////////////////////////////////////////////////////////////////
		rate = movieSize/100;
		wnum = Math.floor(714*rate);
		hnum = Math.floor(268*rate);
    document.open();
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width='+wnum+' height='+hnum+' id="yado_s" align="middle">\n');
    document.write('<param name="allowScriptAccess" value="sameDomain" />\n');
    document.write('<param name="movie" value="/img/hotel/yado_s.swf?movieSize='+movieSize+'" />\n');
    document.write('<param name="menu" value="false" />\n');
    document.write('<param name="quality" value="high" />\n');
    document.write('<param name="bgcolor" value="#ffffff" />\n');
    document.write('<embed src="/img/hotel/yado_s.swf?movieSize='+movieSize+'" quality="high" bgcolor="#ffffff" width='+wnum+' height='+hnum+' name="yadonavi" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\n');
    document.write('</embed>\n');
    document.write('</object>\n');
	document.close();
}