


function minimum(arr){
    let min = arr[0];
    if (arr.length==0){
        return null;
    }
    else if(arr.length==1){
        return arr[0];
    }
    
    else{
        
        for(i=1; i<arr.length; i++){
            if(arr[i]<min){
                min = arr[i];
            }
        }
    } 
    return min;      
}

array=[3, 5, 1, 8, 2];
console.log(minimum(array)); // Output: 1