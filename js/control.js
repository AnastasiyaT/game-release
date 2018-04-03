(function(){
'use strict';

	let firstDice = document.getElementById('img1');	
	let divText = document.getElementsByClassName('text2')[0];

	let link=new Array();  
	let links=new Array();
		link[0]= '1';
		link[1]= '2';
		link[2]= '3';
		link[3]= '4';
		link[4]= '5';
		link[5]= '6';
		links[0]= '`a';
		links[1]= 'A';
		links[2]= 'XA';
		links[3]= 'ША';
		links[4]= 'СА';
		links[5]= 'МА';

firstDice.addEventListener('click', create2Dice);
	function create2Dice() {	
		// <img id="img2" class="gif2" src="img/gif.gif" alt="фотография">
		// for (i = 1; i = 1;i++ ) {
			// let contentIn2 = document.getElementsByClassName('contentIn2')[0];
			// let img = document.createElement('img');
			// img.classList.add('gif2');
			// img.setAttribute('id', 'img2');
			// img.setAttribute('src', 'img/gif.gif');
			// img.setAttribute('alt', 'фото');
			// contentIn2.appendChild(img);
		// } 		
	}

firstDice.addEventListener('click', getNumbDice);
// firstDice.removeEventListener('click', getNumbDice);
	function getNumbDice() {
		let x;
		let y;
		function getRandom(min, max) {
		 	return x = Math.floor(Math.random() * (max - min + 1)) + min;
		}		
		getRandom(0, 5);

		switch(x) {			
			case 0:
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[0]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/0.gif";
				return y = '`a';
				break;
			case 1:
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[1]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/1.gif";
				return y = 'A';
				break;
			case 2:
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[2]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/2.gif";
				return y = 'XA';
				break;
			case 3: 
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[3]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/3.gif";
				return y = 'ША';
				break;
			case 4:
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[4]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/4.gif";
				return y = 'СА';
				break;
			default:
				divText.innerHTML ='Первый выпавший Вам <b>символ </b>(кубик слева) <b>«'+ links[5]+'»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему. ';
				firstDice.src="img/5.gif";
				return y = 'МА';
				break;
		}
		return y;
	}
//firstDice.removeEventListener('click', getNumbDice);

let secondDice = document.getElementById('img2');
secondDice.addEventListener('click', getNumbDice2);	

	function getNumbDice2() {
		let x;
		let y;
		function getRandom(min, max) {
		 	return x = Math.floor(Math.random() * (max - min + 1)) + min;
		}		
		getRandom(0, 5);

		switch(x) {
			case 0:
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[0]+'»</b>';
				secondDice.src="img/0.gif";
				break;
			case 1:
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[1]+'»</b>';
				secondDice.src="img/1.gif";
				break;
			case 2:
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[2]+'»</b>';
				secondDice.src="img/2.gif";
				break;
			case 3: 
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[3]+'»</b>';
				secondDice.src="img/3.gif";
				break;
			case 4:
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[4]+'»</b>';
				secondDice.src="img/4.gif";
				break;
			default:
				divText.innerHTML ='Итоговый выпавший символ <b>символ </b>' + y +' <b>«'+ links[5]+'»</b>';
				secondDice.src="img/5.gif";
				break;
		}
	}


}());