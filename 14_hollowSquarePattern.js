// hollow square
// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 


function hollowSquarePattern(num){
    for(i=0;i<num;i++){
        str="";
        if(i==0 ||i==num-1){
            for(j=0;j<num;j++){
                str=str+"*"+" ";
            }
            
        }
        else{
            str=str+"*"+" ";
            for(k=0;k<num-2;k++){
                str=str+"  "
            }
            str=str+"*"
        }

        console.log(str);
    }      
}

hollowSquarePattern(8);