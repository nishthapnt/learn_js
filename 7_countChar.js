function countChar(str, char){
    let count=0;
    for(leti=0; i<str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
}

function countBs(str){
    return countChar(str, 'B');
}

string = "BUBBLE";
console.log(countBs(string)); 