function clicksearch(theForm){

  var flag = true;

  if(flag) {

     /* JTB */
     if(typeof(theForm.hr001) != "undefined"){
       if(theForm.hr001.checked){
       var code_jtb=theForm.hr001.value;
       var tgtUrl001 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2337474&pid=874816453&vc_url=http%3a%2f%2fdom%2ejtb%2eco%2ejp%2fyado%2fShisetsu%2easpx%3fst%3d"+code_jtb;
         //tgtUrl001 = "http://pt.afl.rakuten.co.jp/c/039ad7f6.45d20731/?url="+encodeURIComponent(tgtUrl001) ;
       w001 = window.open(tgtUrl001, 'w001', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=50,top=75,height=500,width=550');
      }
     }

     /* 宿なび */
     if(typeof(theForm.hr002) != "undefined"){
      if(theForm.hr002.checked){
       var code_yadonabi=theForm.hr002.value;
       var tgtUrl002 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2337474&pid=879717049&vc_url=http%3A%2F%2Frsv.nta.co.jp%2FAffiliate%2Fset%2FAF100101.aspx%3FSITE_ID%3D44080001%26REDI_URL%3Dhttp%253A%2F%2Fsearch.nta.co.jp%2Fnta_dom%2Fff%2FplanDetail.jsp%253FShisetsu%253D"+code_yadonabi;
       //tgtUrl002 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2133401&pid=871971021&vc_url="+encodeURIComponent(tgtUrl003);
       //tgtUrl002 = "/dynamic/redirect.php?ref=/clicksearch/&url="+encodeURIComponent(tgtUrl003);
       w002 = window.open(tgtUrl002, 'w002', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=75,top=100,height=500,width=550');
      }
     }

     /* 宿とる */
     if(typeof(theForm.hr003) != "undefined"){
      if(theForm.hr003.checked){
       var code_yadotoru=theForm.hr003.value;
       var tgtUrl003 = "http://yado.knt.co.jp/ps/planlist.aspx?tc=1375&ydcd="+code_yadotoru;
       w003 = window.open(tgtUrl003, 'w003', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=100,top=125,height=500,width=550');
      }
     }

     /* じゃらん */
     if(typeof(theForm.hr004) != "undefined"){
      if(theForm.hr004.checked){
       var code_jaran=theForm.hr004.value;
       var tgtUrl004 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2337474&pid=874935030&vc_url=http%3a%2f%2fwww%2ejalan%2enet%2fuw%2fuwp3000%2fuww3001%2edo%3fyadNo%3d"+code_jaran+"%26rootCd%3d03%26afCd%3d31%26vos%3dnjalvccp99000" ;
       w004 = window.open(tgtUrl004, 'w004', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=100,top=125,height=500,width=550');
      }
     }

     /* 楽天 */
     if(typeof(theForm.hr005) != "undefined"){
      if(theForm.hr005.checked){
       var code_rakuten=theForm.hr005.value;
       var tgtUrl005 = "http://pt.afl.rakuten.co.jp/c/0b71c40e.8baa4293/?url=http%3a%2f%2ftravel.rakuten.co.jp%2fHOTEL%2f" + code_rakuten + "%2f" + code_rakuten + ".html" ;

       w005 = window.open(tgtUrl005, 'w005', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=100,top=125,height=500,width=550');
      }
     }

     /* ぐるなび */
     if(typeof(theForm.hr006) != "undefined"){
      if(theForm.hr006.checked){
       var code_gnavi=theForm.hr006.value;
       var tgtUrl006 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2337474&pid=876201608&vc_url=http%3a%2f%2fy%2egnavi%2eco%2ejp%2f"+code_gnavi+"%2f";
       w006 = window.open(tgtUrl006, 'w006', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=100,top=125,height=500,width=550');
      }
     }

     /* るるぶ */
     if(typeof(theForm.hr007) != "undefined"){
      if(theForm.hr007.checked){
       var code_rurubu=theForm.hr007.value;
       var tgtUrl007 = "http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2337474&pid=876767232&vc_url=http%3a%2f%2frurubu%2etravel%2fsearchlanding04%2ejsp%3fst%3d"+code_rurubu;
       w007 = window.open(tgtUrl007, 'w007', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes,left=100,top=125,height=500,width=550');
      }
     }

    return;

  }

}
