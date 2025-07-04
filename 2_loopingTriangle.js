//printing a triangle pattern using loops


let str1= "#";
for(i=1;i<8;i++){
    console.log(str1);
    for(j=1;j<=1;j++){ //j<=1 this is right. dont do j<=8...thats dumb
        str1=str1+"#"
    }
}

//-----------------------------------------------------------------

let str2= "";
for(i=1;i<8;i++){
    
    for(j=1;j<=1;j++){
        str2=str2+"*"
    }
    console.log(str2);
}

//-----------------------------------------------------------------

let str3= "";
for(i=1;i<=7;i++){
    str3=str3+"@"
    for(j=1;j<=1;j++){
        console.log(str3);
    }
    
}

//-----------------------------------------------------------------

//the easiest method (hinted by the book)
str4="";
while(str4.length < 7) {
    str4 = str4 + "!";
    console.log(str4);
}   
