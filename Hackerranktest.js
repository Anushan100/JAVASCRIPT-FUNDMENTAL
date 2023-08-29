function fizzbuzz(i){
    if(i%3==0 && i%5==0){
        console.log("Fizzbuzz")
    }
    else if(i%3==0 && i%5!=0){
        console.log("fizz")
    }
    else if(i%3!=0 && i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

fizzbuzz(11);