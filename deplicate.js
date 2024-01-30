function deplicate(array){
    const arr = [...new Set(array)];
    return arr;

}

const check = [1,2,4,5,5,5,7,8,9,9]
const deplicateArr = deplicate(check)
console.log(deplicateArr)