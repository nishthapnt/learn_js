//square star pattern
// ****
// ****
// ****
// ****

function squareStarPattern(num){
    
    for(j=0;j<num;j++){
        str="";
        for(i=0;i<num;i++){
            str=str+"*"+" ";
            
        }
        console.log(str);
    }
    
        
}

squareStarPattern(5);