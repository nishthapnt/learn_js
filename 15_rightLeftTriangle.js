function leftTriangle(num){
    str="";
    for(i=0;i<num;i++){
        str=str+"*";
        console.log(str); 
    }
    
}

leftTriangle(3);


function rightTriangle(num){
    
    for(let i=0;i<num;i++){
        str="";
        for(let j=num-i-1;j>0;j--){
            str=str+" ";
            
        }
        for (let k = 0; k <= i; k++) {
            str += "*";
        }
        console.log(str);
    }
    
}
rightTriangle(4);

