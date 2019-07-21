const animals = [
	'cat',
	'dog',
	'hooman',
	'Aleksey Bykhun',
	'John',
]

const speak = function (word) {
	if (word === 'cat') {
		return 'meow'
	} else {
		return 'Hello, John.'
	}
}

function makeAnimalsSpeak(animals, speak) {
	let speech = []

	for (let index; index < animals.length; index++) {
		speech[index] = speak(animals[index])
	}

	return speech
}

makeAnimalsSpeak(animals, speak)
