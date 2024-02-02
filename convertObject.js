const convert = (objects)=>{
    return Object.entries(objects)
}

const checkObject = {name:'king',age:34,hobby:'football'}

const convertObject = convert(checkObject)
console.log(convertObject);