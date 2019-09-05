$(document).ready(function() {
	

getDate();
getTime();
getDay();
getLatino();

// bepaald de datum
function getDate(){


var d = new Date();
var dag = d.getDate();

if (dag <10){

dag = "0" + dag;
}


var maand = d.getMonth()+1;

if (maand <10){

maand = "0" + maand;
}
var jaar = d.getFullYear();
var datestamp = dag + " : " + maand + " : " + jaar;
var datumvak = $("#datetime");
datumvak.append(datestamp);
console.log(datestamp);

}



// bepaald de tijd
function getTime(){

var t = new Date();
var uur = t.getHours();

if (uur >12){

uur = uur - 12;	
uur = "0" + uur;
}

var minuut = t.getMinutes();

if (minuut <10){

minuut = "0" + minuut;
}

var second = t.getSeconds();

if (second <10){

second = "0" + second;
}

var timestamp = uur + " : " + minuut + " : " + second;


var tijdvak = $("#time");
tijdvak.html(timestamp);

console.log(timestamp);
console.log(tijdvak);


}

setInterval(getTime,1000);

// bepaald welk bolletje ingekleurd moet worden
function getDay(){

var w = new Date();
var DagVanDeWeek = w.getDay();

var cirkel = $(".tick");
// we bepalen het bolletje via de volgorde dat ze staan...
$(cirkel[DagVanDeWeek]).css("background","red");

}


// bepaald of am of pm ingekleurd moet worden
function getLatino(){

var x = new Date();
var hours = x.getHours();
var latinoBolletjes = $(".tick2");
console.log(hours);
if (hours >=12){

$(latinoBolletjes[1]).css("background","red");

}

else{
$(latinoBolletjes[2]).css("background","red");

}

}
































});