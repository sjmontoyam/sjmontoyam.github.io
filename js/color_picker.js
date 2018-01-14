
function getColor(){
	
	var selectedItem = document.getElementById("Picker");
	var colorBox1 = document.getElementById("colorBox1");
	var colorBox2 = document.getElementById("colorBox2");
	var colorBox3 = document.getElementById("colorBox3");
	var colorBox4 = document.getElementById("colorBox4");
	var colorBox5 = document.getElementById("colorBox5");
	var name = document.getElementById("color_name");

	
	switch (selectedItem.options[selectedItem.selectedIndex].value){
		case "Amarillo":
			colorBox1.style.backgroundColor = "#ffffcc";
			colorBox2.style.backgroundColor = "#ffff99";
			colorBox3.style.backgroundColor = "#ffff66";
			colorBox4.style.backgroundColor = "#ffff4d";
			colorBox5.style.backgroundColor = "#ffff00";
			name.innerHTML = "AMARILLO";
			break;
			
		case "Naranja":
			colorBox1.style.backgroundColor = "#ffedcc";
			colorBox2.style.backgroundColor = "#ffdb99";
			colorBox3.style.backgroundColor = "#ffc966";
			colorBox4.style.backgroundColor = "#ffc14d";
			colorBox5.style.backgroundColor = "#ffa500";
			name.innerHTML = "NARANJA";
			break;
			
		case "Rojo":
				
			colorBox1.style.backgroundColor = "#ffcccc";
			colorBox2.style.backgroundColor = "#ff9999";
			colorBox3.style.backgroundColor = "#ff6666";
			colorBox4.style.backgroundColor = "#ff4d4d";
			colorBox5.style.backgroundColor = "#ff0000";
			name.innerHTML = "ROJO";
			break;
			
		case "Morado":
				
			colorBox1.style.backgroundColor = "#ffccff";
			colorBox2.style.backgroundColor = "#ff66ff";
			colorBox3.style.backgroundColor = "#ff1aff";
			colorBox4.style.backgroundColor = "#cc00cc";
			colorBox5.style.backgroundColor = "#800080";
			name.innerHTML = "MORADO";
			break;
			
		case "Azul":
						
			colorBox1.style.backgroundColor = "#ccccff";
			colorBox2.style.backgroundColor = "#9999ff";
			colorBox3.style.backgroundColor = "#6666ff";
			colorBox4.style.backgroundColor = "#4d4dff";
			colorBox5.style.backgroundColor = "#0000ff";
			name.innerHTML = "AZUL";
			break;
			
		case "Verde":
				
			colorBox1.style.backgroundColor = "#ccffdd";
			colorBox2.style.backgroundColor = "#80ffaa";
			colorBox3.style.backgroundColor = "#33ff77";
			colorBox4.style.backgroundColor = "#00e64d";
			colorBox5.style.backgroundColor = "#009933";
			name.innerHTML = "VERDE";	
			break;
			
		case "Gris claro":
				
			colorBox1.style.backgroundColor = "#f2f2f2";
			colorBox2.style.backgroundColor = "#e6e6e6";
			colorBox3.style.backgroundColor = "#cccccc";
			colorBox4.style.backgroundColor = "#bfbfbf";
			colorBox5.style.backgroundColor = "#b3b3b3";
			name.innerHTML = "GRIS CLARO";	
			break;
			
		case "Gris oscuro":
					
			colorBox1.style.backgroundColor = "#a6a6a6";
			colorBox2.style.backgroundColor = "#8c8c8c";
			colorBox3.style.backgroundColor = "#595959";
			colorBox4.style.backgroundColor = "#4d4d4d";
			colorBox5.style.backgroundColor = "#333333";
			name.innerHTML = "GRIS OSCURO";
			break;
			
		case "Marron":
						
			colorBox1.style.backgroundColor = "#ffcccc";
			colorBox2.style.backgroundColor = "#ff9999";
			colorBox3.style.backgroundColor = "#ff4d4d";
			colorBox4.style.backgroundColor = "#e60000";
			colorBox5.style.backgroundColor = "#800000";
			name.innerHTML = "MARRON";
			break;
			
		case "Blanco":
						
			colorBox1.style.backgroundColor = "WHITE";
			colorBox2.style.backgroundColor = "WHITE";
			colorBox3.style.backgroundColor = "WHITE";
			colorBox4.style.backgroundColor = "WHITE";
			colorBox5.style.backgroundColor = "WHITE";
			name.innerHTML = "BLANCO";
			break;
			
		case "Negro":
					
			colorBox1.style.backgroundColor = "#666666";
			colorBox2.style.backgroundColor = "#4d4d4d";
			colorBox3.style.backgroundColor = "#333333";
			colorBox4.style.backgroundColor = "#1a1a1a";
			colorBox5.style.backgroundColor = "#000000";
			name.innerHTML = "NEGRO";
			break;
			
		case "Azul claro":
					
			colorBox1.style.backgroundColor = "#ccffff";
			colorBox2.style.backgroundColor = "#99ffff";
			colorBox3.style.backgroundColor = "#66ffff";
			colorBox4.style.backgroundColor = "#33ffff";
			colorBox5.style.backgroundColor = "#00ffff";
			name.innerHTML = "AZUL CLARO";
			break;
			
		case "Beige":
						
			colorBox1.style.backgroundColor = "#f9f9eb";
			colorBox2.style.backgroundColor = "#f4f4d7";
			colorBox3.style.backgroundColor = "#eeeec3";
			colorBox4.style.backgroundColor = "#e9e9af";
			colorBox5.style.backgroundColor = "#dddd88";
			name.innerHTML = "BEIGE";
			break;
			
		case "Dorado":
					
			colorBox1.style.backgroundColor = "#fff7cc";
			colorBox2.style.backgroundColor = "#fff099";
			colorBox3.style.backgroundColor = "#ffe866";
			colorBox4.style.backgroundColor = "#ffe033";
			colorBox5.style.backgroundColor = "#ffd700";
			name.innerHTML = "DORADO";
			break;
			
		case "Plateado":
				
			colorBox1.style.backgroundColor = "#f2f2f2";
			colorBox2.style.backgroundColor = "#e6e6e6";
			colorBox3.style.backgroundColor = "#d9d9d9";
			colorBox4.style.backgroundColor = "#cccccc";
			colorBox5.style.backgroundColor = "#C0C0C0";
			name.innerHTML = "PLATEADO";	
			break;
			
		case "Rosado":
				
			colorBox1.style.backgroundColor = "#ffe6ea";
			colorBox2.style.backgroundColor = "#ffccd5";
			colorBox3.style.backgroundColor = "#ffc0cb";
			colorBox4.style.backgroundColor = "#ffb3bf";
			colorBox5.style.backgroundColor = "#ff99aa";
			name.innerHTML = "ROSADO";		
			break;
			
		case "Magenta":
					
			colorBox1.style.backgroundColor = "#ffccff";
			colorBox2.style.backgroundColor = "#ff99ff";
			colorBox3.style.backgroundColor = "#ff66ff";
			colorBox4.style.backgroundColor = "#ff33ff";
			colorBox5.style.backgroundColor = "#ff00ff";
			name.innerHTML = "MAGENTA";
			break;
			
		case "Indigo":
						
			colorBox1.style.backgroundColor = "#aa33ff";
			colorBox2.style.backgroundColor = "#9500ff";
			colorBox3.style.backgroundColor = "#7700cc";
			colorBox4.style.backgroundColor = "#590099";
			colorBox5.style.backgroundColor = "#4b0082";
			name.innerHTML = "INDIGO";
			break;
			
		case "Agua marina":
				
			colorBox1.style.backgroundColor = "#ccffee";
			colorBox2.style.backgroundColor = "#99ffdd";
			colorBox3.style.backgroundColor = "#66ffcc";
			colorBox4.style.backgroundColor = "#33ffbb";
			colorBox5.style.backgroundColor = "#00ffaa";
			name.innerHTML = "AGUA MARINA";	
			break;
			
		default:
			colorBox1.style.backgroundColor = "WHITE";
			colorBox2.style.backgroundColor = "WHITE";
			colorBox3.style.backgroundColor = "WHITE";
			colorBox4.style.backgroundColor = "WHITE";
			colorBox5.style.backgroundColor = "WHITE";
			name.innerHTML = "COLORES";
		break;
			
	};
};