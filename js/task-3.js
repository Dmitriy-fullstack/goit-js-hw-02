function findLongestWord (string = "") {
    let str = string.split(' ');
    let LongestWordLength = 0;
    let LongestWord = '';
    
       
    // Write code under this line
    for (let i = 0; i < str.length; i += 1) {
      
      if (str[i].length > LongestWordLength) {
        LongestWordLength = str[i].length;
        LongestWord = str[i];
      }
    }
    return LongestWord;
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'