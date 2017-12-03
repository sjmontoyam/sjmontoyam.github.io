
function getColor(){
	var selectedItem = document.getElementById("Picker");
	var colorBox = document.getElementById("colorsBox");
	var name = document.getElementById("color_name");
	
	switch (selectedItem.options[selectedItem.selectedIndex].value){
		case "Amarillo":
			colorBox.style.backgroundColor = "YELLOW";
			name.innerHTML = "AMARILLO";
			break;
		case "Naranja":
			colorBox.style.backgroundColor = "ORANGE";
			name.innerHTML = "NARANJA";
			break;
		case "Rojo":
			colorBox.style.backgroundColor = "RED";
			name.innerHTML = "ROJO";
			break;
		case "Morado":
			colorBox.style.backgroundColor = "PURPLE";
			name.innerHTML = "MORADO";
			break;
		case "Azul":
			colorBox.style.backgroundColor = "BLUE";
			name.innerHTML = "AZUL";
			break;
		case "Verde":
			colorBox.style.backgroundColor = "GREEN";
			name.innerHTML = "VERDE";
			break;
		case "Gris claro":
			colorBox.style.backgroundColor = "LIGHTGRAY";
			name.innerHTML = "GRIS CLARO";
			break;
		case "Gris oscuro":
			colorBox.style.backgroundColor = "DARKGRAY";
			name.innerHTML = "GRIS OSCURO";
			break;
		case "Marron":
			colorBox.style.backgroundColor = "MAROON";
			name.innerHTML = "MARRON";
			break;
		case "Blanco":
			colorBox.style.backgroundColor = "WHITE";
			name.innerHTML = "BLANCO";
			break;
		case "Negro":
			colorBox.style.backgroundColor = "BLACK";
			name.innerHTML = "NEGRO";
			break;
		case "Azul claro":
			colorBox.style.backgroundColor = "CYAN";
			name.innerHTML = "AZUL CLARO";
			break;
		case "Beige":
			colorBox.style.backgroundColor = "BEIGE";
			name.innerHTML = "BEIGE";
			break;
		case "Dorado":
			colorBox.style.backgroundColor = "GOLD";
			name.innerHTML = "DORADO";
			break;
		case "Plateado":
			colorBox.style.backgroundColor = "SILVER";
			name.innerHTML = "PLATEADO";
			break;
		case "Rosado":
			colorBox.style.backgroundColor = "PINK";
			name.innerHTML = "ROSADO";
			break;
		case "Magenta":
			colorBox.style.backgroundColor = "MAGENTA";
			name.innerHTML = "MAGENTA";
			break;
		case "Indigo":
			colorBox.style.backgroundColor = "INDIGO";
			name.innerHTML = "INDIGO";
			break;
		case "Agua marina":
			colorBox.style.backgroundColor = "AQUAMARINE";
			name.innerHTML = "AQUAMARINE";
			break;
			
	};
};