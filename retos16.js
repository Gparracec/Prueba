const fixLetter = letter => {
	return letter
		.trim()
		.replace(/\s+/g, ' ')
		.replace(/([,.!?])\s+/g, '$1')
		.replace(/\s([,.!?])+/g, '$1')
		.replace(/([,.?!]{2,})/g, (_, $1) => $1[0])
		.replace(/([.?!])([A-z])/g, (_, $1, $2) => $1 + $2.toUpperCase())
		.replace(/(santa claus)/gi, 'Santa Claus')
		.replace(/([,.?!])/g, '$1 ')
		.replace(/^([A-z])/g, (_, $1) => $1.toUpperCase())
		.trim()
		.replace(/([A-z])($)/g, '$1.');
		//alasd 
};

// Ejecucion
console.log(
	fixLetter(` hello,  how are you?????     do you know if santa claus exists?  i really hope he does!  bye  `)
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(
	fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
);

console.log(
	fixLetter("  Hi ,Santa claus. I'm a girl ,from .Barcelona , Spain . please, send me a bike.  Is it possible?")
);
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

// Eliminar espacios al inicio y al final
// Eliminar múltiples espacios en blanco y dejar sólo uno
// Dejar un espacio después de cada coma
// Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// La primera letra de cada oración debe estar en mayúscula
// Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
//- Poner un punto al final de la frase si no tiene puntuación