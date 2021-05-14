$(document).ready(function()
{
 	$("#alertSuccess").hide();
 	$("#alertError").hide();
});
$(document).on("click", "#btnSave", function(event)
{

 	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
 	$("#alertError").text("");
 	$("#alertError").hide();


	var status = validateItemForm();

	if (status != true)
    {
 		$("#alertError").text(status);
 		$("#alertError").show();
 		return;
   }


   var student = getStudentCard($("#txtName").val().trim(),
 						$('input[name="rdoGender"]:checked').val(),
 						$("#ddlYear").val()); 

	$("#colStudents").append(student);

 	$("#alertSuccess").text("Saved successfully.");
	$("#alertSuccess").show();

	 $("#formStudent")[0].reset();  
	 
	 
});	 
	 
$(document).on("click", ".remove", function(event)
{
	 $(this).closest(".student").remove();

	 $("#alertSuccess").text("Removed successfully.");
	 $("#alertSuccess").show();
}); 	 
	
function validateItemForm()
{
	// NAME
	if ($("#txtName").val().trim() == "")
 	{
 		return "Insert student name.";
 	}
 	
 	
	// GENDER
	if ($('input[name="rdoGender"]:checked').length === 0)
 	{
		 return "Select gender.";
 	}
 	
 	
	// YEAR
	if ($("#ddlYear").val() == "0")
 	{
 		return "Select year.";
 	}
	return true;
} 	
function getStudentCard(name, gender, year)
{
	var title = (gender == "Male") ? "Mr." : "Ms.";
	var yearNumber = "";
	
	
	switch (year) {
	case "1":
		 yearNumber = "1st";
		 break;
		 
	case "2":
		 yearNumber = "2nd";
 		break;
 		
	case "3":
		 yearNumber = "3rd";
		 break;
		 
		 
	case "4":
 		yearNumber = "4th"; 
		break;
 	}
	var student = "";
    student += "<div class=\"student card bg-light m-2\"style=\"max-width: 10rem; float: left;\">";
    student += "<div class=\"card-body\">";
    student += title + " " + name + ",";
    student += "<br>";
    student += yearNumber + " year";
    student += "</div>";
    student += "<input type=\"button\" value=\"Remove\"class=\"btn btn-danger remove\">";
    student += "</div>";
    
    return student;
}	 
	 
	 
	 
	 