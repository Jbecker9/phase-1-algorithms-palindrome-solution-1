function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverseString(word);

  if (word === reverseWord){
    return true;
  }
  else{
    return false;
  }
}

function reverseString(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join('')
  return reversedWord;
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  isPalindrome("abba")
  isPalindrome("racecar")
  isPalindrome("a")
  isPalindrome("robot")
  isPalindrome("ab")
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
