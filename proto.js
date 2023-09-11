var user=function(firstname,course){
    this.firstname=firstname;
    this.course=course;
    this.getcoursecount=function(){
        console.log(this.course)
    }
}


user.prototype.getfirstname=function(){
    console.log(this.firstname);
}


var test=new user("anushan","javascirpt")
test.getcoursecount();
test.getfirstname();
//console.log(test);



