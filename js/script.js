
function showmenu(){
	var menu = document.getElementById('mobile-menu'), maxH="148px";
	if (menu.style.height == maxH){
		menu.style.height = "0px";

	}else{
		menu.style.height = maxH;
	}
}



