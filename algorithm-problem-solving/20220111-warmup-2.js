function spinWords(str){
    let phrase = str.split(" ");
    // console.log(phrase)
    
    return phrase.map(element => {
      if(element.length >= 5){
        return element.split('').reverse().join('');
      } else {
        return element;
      }
    }).join(' ');
    
}
    
    console.log(spinWords("Hey fellow warriors")); // -> "Hey wollef sroirraw" 
    console.log(spinWords("This is a test")); // -> "This is a test"
    console.log(spinWords("This is another test")); // -> "This is rehtona test"
    console.log(spinWords("This ecnetnes is a ecnetnes")); // -> "This sentence is a sentence"
    console.log(spinWords("You are tsomla to the last test")); // -> "You are almost to the last test"
    console.log(spinWords("Just gniddik ereht is llits one more")); // -> "Just kidding there is still one more"