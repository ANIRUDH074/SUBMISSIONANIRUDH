var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row=1;
function displayDetails()
{
	var fname=document.getElementById("fname").value;
	var contact=document.getElementById("contact").value;
	var country=document.getElementById("country").value;
	var date=document.getElementById("date").value;
	var subject=document.getElementById("subject").value;
	var myfile=document.getElementById("myfile").value;

	if(!fname||!contact||!country||!date||!subject||!myfile)
	{
	alert("Please Fill All Fields");
	return;
	}

var display=document.getElementById("display");
}