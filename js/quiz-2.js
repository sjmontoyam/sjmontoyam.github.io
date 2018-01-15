
function sectionA(){
	
	var answer = [];
	answer.push(document.getElementById("respuesta1"));
	answer.push(document.getElementById("respuesta2"));
	answer.push(document.getElementById("respuesta3"));
	answer.push(document.getElementById("respuesta4"));
	answer.push(document.getElementById("respuesta5"));
	answer.push(document.getElementById("respuesta6"));
	answer.push(document.getElementById("respuesta7"));
	answer.push(document.getElementById("respuesta8"));
	answer.push(document.getElementById("respuesta9"));
	var lowerCaps = [];
	var score = 0;
	var printScore = document.getElementById("scoreA");

	for(i=0;i<9;i++){
		lowerCaps.push(answer[i].value.toLowerCase());
	}


	for(i=0;i<9;i++){
		console.log(lowerCaps[i]);
	}

	if(lowerCaps[0]=="somos"){
		score+=1;
		answer[0].style.backgroundColor="#99ff33";
	}
	else{
		answer[0].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[1]=="son"){
		score+=1;
		answer[1].style.backgroundColor="#99ff33";
	}
	else{
		answer[1].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[2]=="es"){
		score+=1;
		answer[2].style.backgroundColor="#99ff33";
	}
	else{
		answer[2].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[3]=="son"){
		score+=1;
		answer[3].style.backgroundColor="#99ff33";
	}
	else{
		answer[3].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[4]=="están" || lowerCaps[4]=="estan"){
		score+=1;
		answer[4].style.backgroundColor="#99ff33";
	}
	else{
		answer[4].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[5]=="es"){
		score+=1;
		answer[5].style.backgroundColor="#99ff33";
	}
	else{
		answer[5].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[6]=="es"){
		score+=1;
		answer[6].style.backgroundColor="#99ff33";
	}
	else{
		answer[6].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[7]=="están" || lowerCaps[7]=="estan"){
		score+=1;
		answer[7].style.backgroundColor="#99ff33";
	}
	else{
		answer[7].style.backgroundColor="#ff3300";
	}
	if(lowerCaps[8]=="estoy"){
		score+=1;
		answer[8].style.backgroundColor="#99ff33";
	}
	else{
		answer[8].style.backgroundColor="#ff3300";
	}

	printScore.innerText = score + "/9";
	
}

Right = {
	optionA1:"ESTOY",
	optionA2:"ESTÁ",
	optionA3:"ESTÁS",
	optionA4:"ESTÁN",
	optionA5:"ESTAMOS",
	optionA6:"ESTÁN"
};

Given = {};

var selectionA;
var selectionB;

function sectionB1(param1){
	selected=document.getElementById(param1);
	selected.disabled=true;
	selected.style.visibility="hidden";
	selectionA=param1;
}

function sectionB2(param1){
	var textObtain="";
	selected=document.getElementById(param1);
	selected.disabled=true;
	selectionB=selected.innerText;
	selected.style.visibility="hidden"
	Given[selectionA] = selectionB;
}

function sectionB(){
	var score=0;
	var printScore = document.getElementById("scoreB");
	for(key in Right){
		if(Right[key]==Given[key]){
			score+=1;
		}
	}

	for(key in Right){
		console.log(Right[key]);
	}
	for(key in Right){
		console.log(Given[key]);
	}
	printScore.innerText = score + "/6";
}