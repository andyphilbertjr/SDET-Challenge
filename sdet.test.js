const newSentence = require('./sdet');

let testString = newSentence.findLongestWord('The cow jumped over the moon.');

test('Find the longest word in the following sentence', () => {
    expect(testString).toBe('jumped 6')
})

test('is the argument being passed in a string', () => {
   expect(typeof 'value').toBe("string")
})

test('does the value returned include punctuation', () => {
  expect(testString).not.toMatch(/[^,!?]+[=|!.'"()?]+(\s|$)/g)
})