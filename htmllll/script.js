var row=1;
var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);


function displayDetails()
{
	var fname=document.getElementById("fname").value;
	
	var contact=document.getElementById("contact").value;
	var country=document.getElementById("country").value;
	
	var date=document.getElementById("date").value;
	
	var subject=document.getElementById("subject").value;

	var myfile=document.getElementById("myfile").value;

var checkBox = document.getElementById("water");
 var checkBox1 = document.getElementById("air");
 var checkBox2 = document.getElementById("others");

localStorage.setItem("fname", fname);
localStorage.setItem("country", country);
localStorage.setItem("date", date);
	localStorage.setItem("subject", subject);

		localStorage.setItem("water", checkBox);
			localStorage.setItem("air", checkBox1);
				localStorage.setItem("others", checkBox2);
	if(!fname||!contact||!country||!date||!subject||!myfile)
	{
	alert("Please Fill All Fields");
	
	}
	else{
	alert("Your Complaint has been filled Successfully");
	return;
	}
if (isNaN(contact)){
document.getElementById("contact").innerHTML="**Only no.s are allowed";
return false;
}
if(contact.length<10)
{

document.getElementById("contact").innerHTML="**Only 10 no.s are allowed";
return false;
}

if(contact.length>10)
{

document.getElementById("contact").innerHTML="**Only 10 no.s are allowed";
return false;
}
 if (checkBox.checked == true){


var display=document.getElementById("display");
var newRow=display.insertRow(row);
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=fname;
cell2.innerHTML=country;
cell3.innerHTML=date;
cell4.innerHTML=subject;

row++;


}
else if (checkBox1.checked == true){

var display1=document.getElementById("display1");
var newRow=display1.insertRow(row);
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=fname;
cell2.innerHTML=country;
cell3.innerHTML=date;
cell4.innerHTML=subject;

row++;


}

else{
var display2=document.getElementById("display2");
var newRow=display2.insertRow(row);
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=fname;
cell2.innerHTML=country;
cell3.innerHTML=date;
cell4.innerHTML=subject;

row++;

	

}        
 

}































