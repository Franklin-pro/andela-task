function countVowel(text){
    const vowel='aiueo';

   let count = 0;

    for(let i = 0; i < text.length; i++){
    if(vowel.includes(text[i])){
            count++;
        }
      
    }
    return count;
}

const example = "franklin programmer";
const countText = countVowel(example)
console.log(countText)
