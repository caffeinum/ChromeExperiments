function findWordsIn(array, word) {
	let found = [];

	for (const _word of array) {
		if (_word.includes(word)) {
			found.push(_word)
		}
	}

	return found
}

findWordsIn([ "cats", "cat", "dog" ], "cat")
