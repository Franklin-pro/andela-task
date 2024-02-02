const mergeTwoArray = (arr1,arr2)=>{
    merge = [];

   a = 0;
   b= 0;
  while( a < arr1.length && b < arr2.length){
    if(arr1[a] <= arr2[b]){
        merge.push(arr1[a])
        a++
    }else{
        merge.push(arr2[b])
        b++;
    }
  }

  for(let i = a ; i < arr1.length; i++){
    merge.push(arr1[i])
  }

  for(let i = b; i< arr2.length; i++)

  merge.push(arr2[i]);

  return merge;
}

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,0]

const answer = mergeTwoArray(arr1,arr2);

console.log(answer)