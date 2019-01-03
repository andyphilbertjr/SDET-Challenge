import java.io.*;
import java.util.*;

//remove characters in String that are not alpanumeric 
  //split string into array
//if if space its the end of the word 
// save the first length in a variable 
// compare the longest word saved to current value
// return longst word length & word


class Solution {
  
  public static String calcLngstWord(String sentence){
    if( sentence.isEmpty() || sentence == null ) return "Please enter string input";
    
    String[] wordsList = sentence.replaceAll("[^a-zA-Z ]", "").toLowerCase().split("\\s+");
    String longestWord = wordsList[0];

    for(int i = 0; i <= wordsList.length - 1; i++){
      if( longestWord.length() <= wordsList[i].length() ) {
          longestWord = wordsList[i];
      }
    }
    
    return longestWord.length() + " " + longestWord;
  }
    
  public static void main(String[] args) {
    
    System.out.println(calcLngstWord("the cow jumped over the moooon......"));

  }
}