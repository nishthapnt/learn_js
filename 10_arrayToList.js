// function arrayToList(arr,i=0){
//     if(i>arr.length)return null;
//     else{
//         let list={
//             value:arr[i],
//             rest:arrayToList(arr,i+1)
    
//         };
        
        
//         return list;
//     }
    


// }

// arr=[1,2,3];
// console.log(arrayToList(arr));
// console.log(JSON.stringify(arrayToList(arr)));

function arrayToList(arr){
    let list;
    for(let i=0; i<=arr.length; i=i.rest){
        list=i.value;
    }

    return list;
}

arr=[1,2,3];
console.log(arrayToList(arr));
console.log(JSON.stringify(arrayToList(arr)));

