// Task functions

const delayedHello = () =>{
    setTimeout(() =>{
       console.log("Hello World"); 
    }, 2000)
}

const trafficLights = () =>{

    console.log("Red"); 

    setTimeout(() =>{
       console.log("Amber"); 
    }, 3000)
    setTimeout(() =>{
       console.log("Green"); 
    }, 6000)
}

const countdownTimer = (count) =>{
    for(let i = count; i > 0; i--){
        const timeout = i * 1000;
        setTimeout(() =>{
            console.log(`${count}`);
            count--;
        }, timeout)
    }
}

const add =(x, y)=>{
    return x+y;
}

const subtract = (x,y) =>{
    return x-y;
}

function calculate (x,y,callback){
    const result = callback(x,y);

    console.log(result);
}


// Execute tasks

// delayedHello();
// trafficLights();
// countdownTimer(10);
// calculate(10, 5, add);
// calculate(10, 5, subtract);