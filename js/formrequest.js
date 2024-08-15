function submit() {
	var inputq1 = document.getElementById("question1").value
	var inputq2 = document.getElementById("question2").value
	var inputq3 = document.getElementById("question3").value
	var inputq4 = document.getElementById("question4").value
	var inputq5 = document.getElementById("question5").value

	if (inputq1 && inputq2 && inputq3 && inputq4 && inputq5 != '') {
		document.getElementById('hiddenvalidator').style.fontSize = "0px"
		var validity = true
	} else {
		document.getElementById("hiddenvalidator").style.color = "red";
		document.getElementById('hiddenvalidator').style.fontSize = "1em"
		document.getElementById('hiddenvalidator').style.marginLeft = "10px"
		var validity = false
	}

	if (validity == true) {
		var submitq1 = inputq1
		var submitq2 = inputq2
		var submitq3 = inputq3
		var submitq4 = inputq4
		var submitq5 = inputq5
	}
	
	console.log(validity)
	console.log(submitq1)
	console.log(submitq2)
	console.log(submitq3)
	console.log(submitq4)
	console.log(submitq5)

	// console.log(inputq1)
	// console.log(inputq2)
	// console.log(inputq3)
	// console.log(inputq4)
	// console.log(inputq5)

	// fetch('https://script.google.com/macros/s/AKfycbwnb-mSA_vX7rBcay3KO28ESMpDhmzNBG1FkTBGTNEhzvGm3xSr2afdY8lievKq0VF0Ig/exec', {  // Replace with your Google Apps Script URL
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             body: 'input=' + encodeURIComponent(userInput),
    //         })
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data); // Handle the response data
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
}
