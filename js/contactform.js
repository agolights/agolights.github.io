

var form = document.getElementById('contactForm');
const url = 'https://script.google.com/macros/s/AKfycbyymB838KzzIELhcDeBbO8pfhGGQoFeBxJXapjzIi3vjQEdTLKI9XHH8UiVSYSyU8Cc/exec';
var submitButton = document.getElementById("submitButton");


form.onsubmit = function(event){
		
        var formData = new FormData(form);
        //open the request
        formData = JSON.stringify(Object.fromEntries(formData))
		// alert("formdata= " + formData);
		submitButton.classList.add("button--loading");
		submitButton.classList.add("button--submit-progress");
		submitButton.disabled = true
        //Fail the onsubmit to avoid page refresh.
		
		
		fetch(url, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'text/plain;charset=utf-8',
		  },
		  body: formData,
		})
		  .then((res) => res.json())
		  .then((data) => {
			console.log('data', data);
			// alert("OK");
			submitButton.classList.remove("button--submit-progress");
			submitButton.classList.add("button--submit-ok");
			submitButton.classList.remove("button--loading");
			submitButton.innerHTML = "Message envoyé";
			form.reset();
		  })
		  
		  .catch((err) => {
			  console.log('err', err);
			alert("Une erreur est survenue. Merci d'utiliser un autre moyen de contact.");
   			submitButton.classList.remove("button--submit-progress");
			  submitButton.classList.remove("button--loading");
		  });
		
		
		
        return false; 
    }
	
	
	
	
	
	
	
	