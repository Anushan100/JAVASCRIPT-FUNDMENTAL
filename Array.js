var array=["india","canada","pakistan","srilanka"]
console.log(array)
console.log(array[1])
console.log(array.length)
array[0]="iceland"
console.log("array=======",array)
array.pop();
console.log(array)
console.log(array.indexOf("iceland"));

console.log(Array.from("vijaykumar"))

//var name="vijaykumar"



//fill and filter

var country=["india","canada","pakistan","srilanka","america"]
//console.log(country.fill("h",2,4))
console.log(country.filter((con)=>con!="india"))
