function sum(num){
    sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
        console.log(sum);
        
    }
}
function print(){
    console.log('timer alerrt');

}
setTimeout(print,100);
console.log(sum(1000000));