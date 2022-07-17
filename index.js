console.log ("using veet");
document.getElementById("submit").addEventListener("click", function() {
//Grab the value of the input, set equal to variable
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var addy = document.getElementById("addy").value;
var appt = document.getElementById("appt").value;
var insurance = document.getElementById("insurance")
var insvalue = insurance.options[insurance.selectedIndex].value;
console.log(insvalue);
var comments = document.getElementById("comments").value;

//Set innerHTML of the display elements

document.getElementById("first").innerHTML = fname;
document.getElementById("last").innerHTML = lname;
document.getElementById("eaddress").innerHTML = addy;
document.getElementById("date").innerHTML = appt;
document.getElementById("coverage").innerHTML = insvalue;
document.getElementById("notes").innerHTML = comments;

var checkedValue; 
var inputElements = document.getElementsByClassName('clickbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           document.getElementById("call").innerHTML = checkedValue;
      }
}
var selectedValue; 
var inputElements = document.getElementsByClassName('rselect');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           selectedValue = inputElements[i].value;
           document.getElementById("time").innerHTML = selectedValue;
      }
}
  });

  const emailField = document.querySelector('#addy');
emailField.addEventListener('input', function(event) {
  const value = event.target.value;
  const isValid = (emailField.validity.valid && value.length > 0);
  if(isValid) {
    emailField.style.borderColor = 'black';
  } else {
    emailField.style.borderColor = 'red';
  }
});

// $("input:checkbox").on('click', function() {
//     var $box = $(this);
//     if ($box.is(":checked")) {
//       var group = "input:checkbox[name='" + $box.attr("name") + "']";
//       $(group).prop("checked", false);
//       $box.prop("checked", true);
//     } else {
//       $box.prop("checked", false);
//     }
//   });
  

// var checkedValue; 
// var inputElements = document.getElementsByClassName('messageCheckbox');
// for(var i=0; inputElements[i]; ++i){
//       if(inputElements[i].checked){
//            checkedValue = inputElements[i].value;
//            break;
//       }
// }
  const commentsField = document.querySelector('#comments');
  commentsField.addEventListener('input', function(event) {
    const value = event.target.value;
    const isValid = (commentsField.validity.valid && value.length > 0);
    if(isValid) {
      commentsField.style.borderColor = 'black';
    } else {
      commentsField.style.borderColor = 'red';
    }
  });

