// JavaScript Document
function formValidator()
{
	var username=document.getElementById("username");
	var password= document.getElementById("password");
	var firstname=document.getElementById("firstname");
	var lastname=document.getElementById("lastname");
	var profilepic=document.getElementById("profilepic");
	var date=document.getElementById("dd");
	var month=document.getElementById("mm");
	var year=document.getElementById("yyyy");
	var hobby=document.getElementsByName("hobby[]");
	var country=document.getElementById("cntry");
	var phone=document.getElementById("phone");
	var msg=document.getElementById("close");
	var prog=document.getElementById("prog");
	var percentage=document.getElementById("per");
	
	if(isAlphaNumeric(username,5,"Enter Valid username or \n check the length")){
		prog.style.width="9%";
		percentage.innerHTML="9%";
		if(isAlphaNumeric(password,1,"Enter valid Password or \n check the length")){
			prog.style.width="18%";
			percentage.innerHTML="18%";
			if(isAlphabet(firstname,2,"Enter Valid firstname or \n check the length")){
				prog.style.width="27%";
				percentage.innerHTML="27%";
				if(isAlphabet(lastname,2,"Enter Valid lastname or \n check the length")){
					prog.style.width="36%";
					percentage.innerHTML="36%";
					if(isPicture(profilepic,"Enter valid path (.png/.gif/.jpf)")){
						prog.style.width="45%";
						percentage.innerHTML="45%";
						if(isNumeric(date,2,"Enter only numbers for date")){
							prog.style.width="54%";
							percentage.innerHTML="54%";
							if(madeSelection(month,"Please Choose a month")){
								prog.style.width="63%";
								percentage.innerHTML="63%";
								if(isNumeric(year,4,"Enter only numbers for year")){
									prog.style.width="72%";
									percentage.innerHTML="72%";
									if(isChecked(hobby,"Select atleast one hobby ")){
										prog.style.width="81%";
										percentage.innerHTML="81%";
										if(madeSelection(country,"Please choose country")){
											prog.style.width="90%";
											percentage.innerHTML="90%";
											if(isPhone(phone,10,"enter valid phone no")){
												prog.style.width="100%";
												percentage.innerHTML="100%";
												document.getElementById('alert').style.visibility="visible";
												msg.focus();
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

/*validation function for numeric input fields*/
function isNumeric(elem,mi, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)&& elem.value!=0){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

/*validation function for alphatbet input fields*/
function isAlphabet(elem,mi, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	var elem_len = elem.value.length; 
	if(elem.value.match(alphaExp) && elem_len>=mi){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

/*validation function for Alpha numeric input fields*/
function isAlphaNumeric(elem, mi, helperMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/;
	var elem_len = elem.value.length; 
	if(elem.value.match(alphaExp)  && elem_len>=mi){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

/*validation function for select boxes*/
function madeSelection(elem, helperMsg){
	if(elem.value == "Select Month" || elem.value==""){
		alert(helperMsg);
		elem.focus();
		return false;
	}else{
		return true;
	}
}

/*validation function for Phone number fields*/
function isPhone(elem,mi, helperMsg){
	var numericExpression = /^(?:\+?91[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

/*validation function for file input fields*/
function isPicture(elem,helpermsg)
{
	var val=elem.value;
	if( val.match(".jpg")|| val.match(".gif") || val.match(".png") || val.match(".JPG")|| val.match(".GIF") || val.match(".PNG")){
		return true;
	}
	else{
		alert(helpermsg);
		elem.focus();
		return false;
	}
}

/*validation function for checkboxes*/
function isChecked(elem,helpermsg)
{
	var hasChecked = false;
	for (var i = 0; i < elem.length; i++)
	{
		if (elem[i].checked)
		{
			hasChecked = true;
			break;
		}
	}
	if (hasChecked == false)
	{
		alert(helpermsg);
		return false;
	}
	return true;
}

/*function for closing the alert message*/
function funClose()
{
	document.getElementById('alert').style.visibility="hidden";
}