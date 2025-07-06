//array reversal by returning new array

function reverseArray(arr){
    newArr=[];
    for(let i=arr.length-1;i>=0;i--){
            newArr.push(arr[i]);
    }
    return newArr;
}

let arr1=[1,2,3,4,5];
console.log(reverseArray(arr1));



function reverseArrayInPlace(arr){
    for(let i=0;i< Math.floor(arr.length/2);i++){
        let temp;
        
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}

arr2=[6,7,8,9,10];
console.log(reverseArrayInPlace(arr2));