function isEven(n){
    if(n==0){
        return true; // 0 is considered even
    }
    else if(n==1){
        return false; // 1 is considered odd
    }
    else if(n<0){
        return isEven(-n); // handle negative numbers by converting to positive
    }
    else{
        return isEven(n-2); // recursively check by subtracting 2
    }
}

console.log(isEven(50)); 
 