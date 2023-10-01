function sum(a,b){
    return a+b;
}

var myA=[1,2];

console.log(sum(...myA))



function sumone(...arg){
    let sum=0;
    for(const i of arg ){
        sum+=i;
    }
    return sum;
}
console.log(sumone(1,2,3,5))
