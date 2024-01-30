function maximumValue(array){
    if(array.length === 0){
        return undefined;
    }
    let maxV = array[0]
    for(let i=1; i < array.length; i++){
        if(maxV=[i] > array){
            maxV = array[i]
        }
    }
    return maxV
}

const value= [1,2,4,5,6,7,8,9,11];
const maxValue = maximumValue(value);

console.log(maxValue)