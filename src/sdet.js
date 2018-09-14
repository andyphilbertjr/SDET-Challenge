//Estimated Time: 30-60 mins depending on experience.
//In the programming language of your choice create a class with a method to return the length and longest words in a sentence. For example, “The cow jumped over the moon.” should return 6 and “jumped”.
//Create unit tests to test that method, reworking your code if needed.
//Explain any assumptions in comments.
//Add a README explaining how to execute your tests.
//Share via GitHub etc or email.

class LongestWord {
  
  findLongestWord(sentence){
    if ( sentence === sentence.toString() ) {
        let longestWordInSent = sentence.split(' ').reduce((currLongestWord, currentWord ) => {
        return currentWord.length > currLongestWord.length  ? currentWord: currLongestWord
      }) 
      return longestWordInSent + " " + longestWordInSent.length
    }
    throw new Error('This method only takes strings as arguments')
  }
}

let newSentence = new LongestWord()

newSentence.findLongestWord('the cow jumped over the moon')

module.exports = newSentence;
//should return a length of string and actual sting
//is the object being passed in a actual string
//are there unwanted number or punctuations in the string
//are there multiple words with equal length as the first longest
//