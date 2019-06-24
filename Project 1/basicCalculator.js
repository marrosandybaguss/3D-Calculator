// var result = document.getElementById('b11');
// var operandSelected = document.getElementById('b12');

// const operatorPlus = document.querySelector('#b13 .operator');
// const operatorMinus = document.querySelector('#b14 .operator');
// const operatorTimes = document.querySelector('#b15 .operator');
// const operatorDivide = document.querySelector('#b16 span:last-child');

// const backSpace = document.querySelector('#b16 span:nth-child(3)');
// const toResult = document.querySelector('#b17 span:last-child');
// const reset = document.querySelector('#b17 span:nth-child(3)');
// const kurungKiri = document.querySelector('#b17 span:first-child');
// const kurungKanan = document.querySelector('#b17 span:nth-child(2)');

// const satu = document.querySelector('#b15 span:nth-child(3)');
// const dua = document.querySelector('#b15 span:nth-child(2)');
// const tiga = document.querySelector('#b15 span:first-child');
// const empat = document.querySelector('#b14 span:first-child');
// const lima = document.querySelector('#b14 span:nth-child(2)');
// const enam = document.querySelector('#b14 span:nth-child(3)');
// const tujuh = document.querySelector('#b13 span:first-child');
// const delapan = document.querySelector('#b13 span:nth-child(2)');
// const sembilan = document.querySelector('#b13 span:nth-child(3)');
// const titik = document.querySelector('#b16 span:nth-child(2)');

const operand = document.getElementsByClassName('operand');
const operator = document.getElementsByClassName('operator');

for ( let i = 0; i < operand.length; i++) {
	operand[i].addEventListener('click', function(){
		operand[i].style.backgroundColor = 'white';
		operand[i].style.color = '#585858';
		operand[i].style.border = '2px solid #787878';
	});

	operand[i].addEventListener('mouseleave', function(){
		operand[i].style.backgroundColor = '#404040';
		operand[i].style.color = 'white';
		operand[i].style.border = '2px solid #D3D3D3';
	});	
}

for ( let i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function(){
		operator[i].style.backgroundColor = 'white';
		operator[i].style.color = '#585858';
		operator[i].style.border = '2px solid #787878';
	});

	operator[i].addEventListener('mouseleave', function(){
		operator[i].style.backgroundColor = '#787878';
		operator[i].style.color = 'white';
		operator[i].style.border = '2px solid #585858';
	});	
}

const operandSelectedShow = document.getElementById('b12');
operandSelectedShow.innerHTML = '...';