function capitalizeFirstWord(sentence) {
    const words = sentence.split(" ");
    let capitalizedSentence = "";

    for (let i = 0; i < words.length; i++) {
        const text = words[i];
        const capitalizedWord = text.charAt(0).toUpperCase() + text.slice(1);

        if (i === 0) {
            capitalizedSentence += capitalizedWord;
        } else {
            capitalizedSentence += " " + capitalizedWord;
        }
    }

    return capitalizedSentence;
}
const sample = 'hey';
const capital = capitalizeFirstWord(sample)
console.log(capital)