var namesta;

function showmenu(event, a) {
	var x = document.getElementById("clickmenu");
	var y = document.getElementById(a);
	namesta = a;

	e = event || window.event;	
	xpos = e.clientX;
	ypos = e.clientY;

	x.style.opacity = 1;
	x.style.left = xpos + 10;
	x.style.top = ypos;
	x.style.zIndex = 1000;

	block = true;
}

function blockelem(a){
	var x = document.getElementById(namesta);
	x.style.opacity = 1;
}