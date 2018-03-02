var pic = document.getElementById("one");
var clearB = document.getElementById("clear");
var dvd = document.getElementById("dvd");
var stretch = document.getElementById("stretch");

var stat = 0;

var radius;
var x;
var y;
var gfactor;
var id;
var c1cle;

var radius2;
var x2; var y2;
var xfactor; var yfactor;
var id2;
var c2cle;
var grow = function(e){
    c1cle.setAttribute("r", radius);
    if( radius == 250 || radius == 0){
	gFactor*=-1;
    }
    radius+=gFactor;
    pic.appendChild(c1cle);
    console.log(radius);

}

var bounce = function(){
    if( x2+12 >= 500 || x2-12 <=0 ){
	xFactor*=-1;
    }
    if( y2+12 >= 500 || y2-12 <=0 ){
	yFactor*=-1;
    }
    x2+=2*xFactor;
    y2+=1*yFactor;
    c2cle.setAttribute("cx", x2);
    c2cle.setAttribute("cy", y2);
}



var clear = function(){
    if( stat == -1 ){
	clearInterval(id1);
	pic.removeChild(c1cle);
    }
    else if( stat == 1 ){
	clearInterval(id2);
	pic.removeChild(c2cle);
    }
    stat = 0;
}

var go1 = function(){
    if( stat == 0 ){
	stat = -1;
	radius = 10;
	gFactor = 1;
	c1cle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1cle.setAttribute("cx", 250);
	c1cle.setAttribute("cy", 250);
	id1 = setInterval(grow,10);
    }
    else{
	clear();
	if( stat != -1 ){
	    go1();
	}
    }
}

var go2 = function(){
    if( stat == 0 ){
	stat = 1;
	
	x2 = 250;
	y2 = 250;
	xFactor = 1;
	yFactor = 1;
	c2cle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c2cle.setAttribute("r", 10);
	c2cle.setAttribute("cx", 250);
	c2cle.setAttribute("cy", 250);
	pic.appendChild(c2cle);
	
	id2 = setInterval(bounce,10);
    }
    else{
	clear();
	if( stat != 1 ){
	    go2();
	}
    }
}

dvd.addEventListener("click", go2);
stretch.addEventListener("click", go1);
clearB.addEventListener("click",clear);
