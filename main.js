var studentArray=[];
function submit(){
    var name1=document.getElementById("nameOfStudent1").value;
    studentArray.push(name1)
     var name2=document.getElementById("nameOfStudent2").value;
    studentArray.push(name2)
     var name3=document.getElementById("nameOfStudent3").value;
    studentArray.push(name3)
     var name4=document.getElementById("nameOfStudent4").value;
    studentArray.push(name4)
    document.getElementById("result").innerHTML=studentArray;
    

}
function sort(){
    studentArray.sort();
    document.getElementById("result").innerHTML=studentArray;
}