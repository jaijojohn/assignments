/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sortedWord1 = sortStrChars(str1);
  const sortedWord2 = sortStrChars(str2);
 /// console.log(sortedWord1);
 // console.log(sortedWord2);
  if (sortedWord1 = sortedWord2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = isAnagram;
