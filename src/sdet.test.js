const newSentence = require('./sdet');

test('Find the longest word in the following sentence', () => {
    expect(newSentence.findLongestWord('The cow jumped over the moon')).toBe('jumped 6')
})