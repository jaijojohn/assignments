/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversestr = str.replace(/\s/g, '').split("").reverse().join("").toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  console.log(reversestr);
  str = str.replace(/\s/g, '').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  console.log(str);
  if(str != reversestr)
  {
    return false;
  }
  else{
  return true;
  }
}

module.exports = isPalindrome;
