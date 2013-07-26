<!--

var gtype;
var gtype2;

function setArea(type,type2){
  gtype2 = type2;
  work = 'document.sawamane.' + type;
  obj = eval(work);
  param = '&type=' + type + '&area=' + obj.value;
  sendRequest(onloaded,param,'GET','/ajax/get_area_data.php',true,true);
}

function area_init(type){
  gtype = type;
  param = '&type=' + type;
  sendRequest(onloaded_ini,param,'GET','/ajax/get_area_data.php',true,true);
}

function onloaded_ini(res)
{
  var resdata = "";
  resdata = res.responseText;
  var data = "";
  data = eval("("+resdata+")");

  work = 'document.sawamane.' + gtype;
  GerandeObj = eval(work);
  GerandeObj.options.length = 1;

  var GerandeCnt = 1;
  for(var i=0; i<data.item.length; i++)
  {
    var Name = data.item[i].name;
    var Code = data.item[i].id;
    GerandeObj.options[GerandeCnt] = new Option(Name,Code);
    GerandeCnt++;
  }
}

function onloaded(res)
{
  var resdata = "";
  resdata = res.responseText;
  var data = "";
  data = eval("("+resdata+")");
  
  work = 'document.sawamane.' + gtype2;
  GerandeObj = eval(work);
  GerandeObj.options.length = 1;

  var GerandeCnt = 1;
  for(var i=0; i<data.item.length; i++)
  {
    var Name = data.item[i].name;
    var Code = data.item[i].id;
    GerandeObj.options[GerandeCnt] = new Option(Name,Code);
    GerandeCnt++;
  }
}

-->
