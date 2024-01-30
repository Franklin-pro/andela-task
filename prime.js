function primeNumber(number){
    if(number <= 1){
        return false;
    }
    
    for(let i = 2; i < (number ** 0.5)+1; i++){
    
        if(number % i === 0){
            return false;
        }else{
            return true;
        }
  
    }
    }
    primeNumber();
    const numbers = [4];
    console.log(primeNumber(numbers))