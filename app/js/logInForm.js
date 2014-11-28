docReady(function() {
	var formInputs = document.getElementById('log-in-form').getElementsByTagName('input');
	for(var i  = 0; i < formInputs.length; i++) {
		if(checkFormInputTextValue(formInputs[i])) {
			formInputs[i].className = "used";
		} else {
			formInputs[i].className = "";
			formInputs[i].blur();
		}
	}
});

function changeLogInFormInput(element) {
	if(checkFormInputTextValue(element)) {
		element.className = "used";
	} else {
		element.className = "";
	}
}

function checkFormInputTextValue(element) {
	if(element.value) {
		return true;
	} else {
		return false;
	}
}