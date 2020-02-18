// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE
// loop_algos problem 3 using while loop
counter = 1;
while(counter <= 30) {
    if(counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz");
    }
    
    else if(counter % 3 == 0) {
        console.log("Fizz");
    }

    else if(counter % 5 == 0) {
        console.log("Buzz");
    }

    else
        console.log(counter);
    counter++
}

// loop_algos problem 2 using while loop

counter = 1;
sum = 0;
while(counter <= 10) {
    console.log(counter);
    sum= sum + counter;
    console.log(sum);
    counter++
}

// loop_algos problem 1 using while loop

num = 0;

while (num < 20) {
    num++
    if(num % 2 != 0){
    console.log(num)
    }   
}