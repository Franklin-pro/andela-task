function reverseWord(text){

    let ans = text.split("")
    arra= []
    for(let i = ans.length-1;i>=0; i--){
        arra.push(ans[i])
    }
    return ans;
}

const word = 'franklin';
const reverseWords = reverseWord(word);
console.log(reverseWords)

// answer is ['n,i']