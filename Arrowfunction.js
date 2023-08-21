// ARROW FUNCTION

var Evenfun=(i)=>{
    if(i%2===0){
        console.log("true");
    }
    else{
        console.log("flase");
    }
}

//Evenfun(2);



//callback function

[1,2,3,4,5].every(Evenfun);