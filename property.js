const properties = (object)=>{

    const key = Object.keys(object)
     
    return key.length;
}

const firstObject = {name:'frank',age:20,hobbies:'musics'}

const countProperties = properties(firstObject)
console.log(countProperties)