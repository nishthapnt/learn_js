//creating and writing to file 
const fs= require("fs");
let filename="./files/meow.txt";
let content="mew this is a file";
fs.writeFile(filename,content,(err)=>{
    if(err){
        console.log("could not write to file")
        console.log(err);
    }
    else{
        console.log("written to file successfully")
    }
});
