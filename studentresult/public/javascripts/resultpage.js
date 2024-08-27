function resultvalidate(rollno,courses)
{
    var array={};
    alert("array.toString");
    console.log("array.toString");
for(const courseid in courses)
   
    {
      var element= {
        course:courseid,
        mark:document.getElementById("mark[courseid]").value
       }

       array.add(element);
    }
   alert("array.toString");
    var url = "/resultpage/create/"+encodeURIComponent(rollno) + "/" + encodeURIComponent(array);
    window.location.href = url; 



}