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


// 1. Call stack: setTimeout(print, 100) → Web API timer started
// 2. Call stack: console.log(sum(1000000)) → runs sum() completely
// 3. After sum() completes and stack is clear → event loop checks the Task Queue
// 4. Timer (print) callback is now pushed to call stack and executed


// because sum() takes long to complete, setTimeout(print, 100) will not execute exactly after 100ms. 
// It will wait for the call stack to be empty, which happens only after sum() finishes

//-----------------------------------------------------------------------------------------------------

// so asynchronous is basically non sequential execution based on the execution time of tasks
// (done by the programmer by using call backs) and is not same as multithreading

// Asynchronous means:
// "Don't wait here. Move on, and I'll come back to this task later when it's ready."
// This is not about running things in parallel, it's about not blocking the thread.

// In multithreading, two or more tasks truly run at the same time using multiple CPU cores.
// In JavaScript, only one thing runs at a time, but asynchronous tasks are managed smartly via the event loop.

