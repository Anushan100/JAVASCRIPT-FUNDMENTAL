function init(){
        var firstname="vijay"
        function getfirstname(){
            console.log(firstname)
        }
       return getfirstname;
}
var value =init();
value();


//exmaple 1
function doaddtion(x){
    console.log("x======"+x)
        function get(y){
            console.log("y===="+y)
            return x+y
        }
        return get;
    }

    var addvalue=doaddtion(4);
    addvalue(5)