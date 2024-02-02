const elements =(sample) =>{
    if(sample.length <= 1){
        return sample;
    }

    const element = sample.shift()
    sample.push(element);

    return sample;
}

const sampling = [1,2,3,4,5,6,6,7];

const result = elements(sampling)
console.log(result)