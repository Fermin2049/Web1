var indice = 1;
mostrarFoto(indice);

function navegarFoto(n) {
	mostrarFoto((indice += n));
	console.log((indice += n));
}

function fotoActual(n) {
	mostrarFoto((indice = n));
}

function mostrarFoto(n) {
	var i;
	var foto = document.getElementsByClassName('foto');
	var circulo = document.getElementsByClassName('circulos');

	if (n > foto.length) {
		indice = 1;
	}
	if (n < 1) {
		indice = foto.length;
	}
	for (i = 0; i < foto.length; i++) {
		foto[i].style.display = 'none';
	}
	for (i = 0; i < circulo.length; i++) {
		circulo[i].className = circulo[i].className.replace('active', '');
	}
	foto[indice - 1].style.display = 'block';
	circulo[indice - 1].className += 'active';
}
