var user=function(firstname,course){
    this.firstname=firstname;
    this.course=course;
    this.getcoursecount=function(){
        console.log(this.course)
    }
}

var test=new user("anushan","javascirpt")
test.getcoursecount();
console.log(test);
//var test1=new user("sharsuan","java");
//console.log(test1)

