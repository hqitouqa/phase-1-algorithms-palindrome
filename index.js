function isPalindrome(word) {
  // Write your algorithm here
  if(word.charAt(0)===word.charAt(word.length-1)&& word.charAt(1)===word.charAt(word.length-2)){
    return true
  } else {
      return false
  }
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
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
