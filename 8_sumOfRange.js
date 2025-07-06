function range(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
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

arr=range(1,10);
console.log(sum(arr));