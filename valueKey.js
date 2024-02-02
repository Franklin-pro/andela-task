const valueKey = (object1,object2) =>{
for(const key in object1){
    if(object2.hasOwnProperty(key) && object1[key] === object2[key]){
        return true;
    }
}
return false;
}
const object1 = { name: 'John', age: 25, city: 'Example City'};
const object2 = { hobby: 'Programming',city: 'Example City',};

const result = valueKey(object1, object2);
console.log(result); // Output: true