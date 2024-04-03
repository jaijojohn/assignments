/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let result = 0;
  
  let res = str.toLowerCase().split("");
  for(let i = 0;i<str.length;i++)
  {
    if(res[i].includes('a') || res[i].includes('e') || res[i].includes('i')|| res[i].includes('o')||res[i].includes('u') )
    {
        result = result +1;
    }
  }
  return (result);
}

module.exports = countVowels;