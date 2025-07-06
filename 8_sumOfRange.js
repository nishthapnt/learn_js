function range(start, end, step=1){
    let arr = [];
    if(start>end){
        for(let i = start; i >= end; i+=step){
            arr.push(i);
        }
    }
    else{
        for(let i = start; i <= end; i+=step){
            arr.push(i);
        }
    }
    
    return arr;
}
function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];

    }
    return sum;
}

arr=range(5,2,-1);
console.log(arr);
console.log(sum(arr));