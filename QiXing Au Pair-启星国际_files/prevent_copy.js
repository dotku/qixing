var bindEvent = function(obj,ev,fun){
	if(obj.attachEvent){
		obj.attachEvent("on"+ev,fun);
	}else{
		obj.addEventListener(ev,fun);
	}
}
function prevent_copy(){
	$(document).bind("contextmenu",function(){return false;});
	$(document).bind("selectstart",function(){return false;});
	$(document).keydown(function(){return key(arguments[0])}); 
	$(function(){
		$('body').css('-moz-user-select','none');
	});
}
	//按键时提示警告
function key(e){
	var keynum;						
	if(window.event) keynum = e.keyCode;// IE                    
	else if(e.which )  keynum = e.which; // Netscape/Firefox/Opera
	if(e.ctrlKey && (keynum == 88 || keynum == 67)){ alert('防止复制！');return false;}
}
bindEvent(window,'load',prevent_copy);
