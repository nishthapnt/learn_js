// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a "#" character. The characters should form a
// chessboard.
// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

//-------------------------------------------------------------------------------------------------

// let str = " ";  dont put this hereee!!! becayse you need str to be updated for every line
for(let i=0; i<8; i++){
    let str = " ";
    for(let j=0; j<8; j++){
        if((i+j)% 2 == 0){
            str=str+" ";
        }
        else{
            str=str+"#";
        }
    }
    console.log(str);//prints each row of the chessboard one by one   
}
// console.log(str);  cant do this because str is not defined outside the loop

//---------------------------------------------------------------------------------------------------



let str = " ";
for(let i=0; i<8; i++){
    
    for(let j=0; j<8; j++){
        if((i+j)% 2 == 0){
            str=str+" ";
        }
        else{
            str=str+"@";
        }
    }
    str=str+"\n"; // add a newline character after each row      
}
console.log(str);// prints entire chessboard stored in str at once 


