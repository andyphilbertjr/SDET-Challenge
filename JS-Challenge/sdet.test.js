const longestWord = require('./sdet')
const longWordFinder = new longestWord()
const findLongest = longWordFinder.findLongestWord

describe('Longest word in string ', () => {
  let testString = 'The cow jumped over the moon.';

  test('does the return value equal jumped 6 for test string', () => {
    expect(findLongest(testString)).toBe('jumped 6')
  })

  test('is the return value a string', () => {
    expect(typeof findLongest(testString)).toBe("string")
  })

  test('does the value returned include punctuation', () => {
    expect(findLongest(testString)).not.toMatch(/[^,!?]+[=|!.'"()?]+(\s|$)/g)
  })

  test('check if the argument passed is a string ', () => {
    const spy = jest.spyOn(longWordFinder, "findLongestWord")
    const results = longWordFinder.findLongestWord(testString)

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(expect.any(String))
  })
});