const newSentence = require('./sdet');

test('Find the longest word in the following sentence', () => {
    expect(newSentence.findLongestWord('The cow jumped over the moon.')).toBe('jumped 6')
})

test('is the argument being passed in a string', () => {
   expect(typeof 'value').toBe("string")
})

