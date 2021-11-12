function palindromeCheck(str) {

    return str.replace(/\W+/g, '').toLowerCase() === str.replace(/\W+/g, '').toLowerCase().split('').reverse().join('') ? "Is a palindrome" : "Is not a palindrome";
  }
  
  console.log(palindromeCheck("Egad, a base tone denotes a bad age."));