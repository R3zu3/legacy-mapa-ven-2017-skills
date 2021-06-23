window.onmousemove = logMouseMove;

var xpos;
var ypos;
var gp;
var myVar;
var block;

function logMouseMove(event) {
	e = event || window.event;	
	xpos = e.clientX+20;
	ypos = e.clientY;

	var d = document.getElementById("stext");
	if (gp) {
		d.style.left = xpos+"px";
  		d.style.top = ypos+"px";
  	}
}

function changeImage(z) {
	sid = "state"+z;
	document.getElementById(sid).style.opacity = 1;
	document.getElementById("state0").style.opacity = 0;
	document.getElementById("isolater").style.opacity = 0.5;
	document.getElementById("stext").style.opacity = 1;
	gp = true;
}

function setdefaultmap(z) {
	if (!block){
		pid = "state"+z;
		document.getElementById(pid).style.opacity = 0;
		document.getElementById("state0").style.opacity = 1;
		document.getElementById("isolater").style.opacity = 0;
		document.getElementById("stext").style.opacity = 0;
		gp = false;

		document.getElementById("clickmenu").style.opacity = 0;
		document.getElementById("clickmenu").style.zIndex = -1000;
	}
}

function showatpos(a) {
	var d = document.getElementById("stext");
	d.innerHTML = a;
}

function startimer(){
	myVar = setInterval(setsamepos, 1);
}

function stoptimer(){
	clearInterval(myVar);
}

function setsamepos() {

	for (var i = 0; i <=25; i++) {
		var id = "state" + i;
		
		var mapven = document.getElementById("mapven");

		var states = document.getElementById(id);
		
		states.style.zIndex = 5+i;
	}
}

window.onload = startimer;
