
$(document).ready(function(){
	
	// focus
	$('#nome').keypress(function (e) {
		  if (e.which == 13) {
		    $('#cognome').focus();
		    return false;  
		  }
	});
	$('#cognome').keypress(function (e) {
		  if (e.which == 13) {
		    $('#telefono').focus();
		    return false;  
		  }
	});
	$('#telefono').keypress(function (e) {
		  if (e.which == 13) {
		    $('#email').focus();
		    return false;  
		  }
	});
	$('#email').keypress(function (e) {
		  if (e.which == 13) {
		    $('#password').focus();
		    return false;  
		  }
	});
	$('#password').keypress(function (e) {
		  if (e.which == 13) {
			
		    $('#confermaPassword').focus();
		    return false;  
		  }
	});	
	$('#confermaPassword').keypress(function (e) {
		  if (e.which == 13) {
			
			  $('#date').focus();
			    return false;

		  }
	});
	$('#date').keypress(function (e) {
		  if (e.which == 13) {
		    $('#sessoM').focus();
		    return false;  
		  }
	});
	$('#sessoM').keypress(function (e) {
		  if (e.which == 13) {
		  	$('#submit').focus();
		    return false;  
		  }
	});
	
	
	// controllo sulla validità della password

	$("#confermaPassword").blur(function(){
		 var ck_password = /^[A-Za-z0-9]{8,12}$/;
		 var password = document.getElementById("password").value;
		 var confermapassword = document.getElementById("confermaPassword").value;	  
		 		 
		  // controllo sugli input password
		  if (!ck_password.test(password)) {
				document.getElementById("print").innerHTML= "La password deve contenere almeno 8 e massimo 12 caratteri alfanumerici.";
				$('#password').css("borderColor","red");
				$('#password').focus();
				return false; 
		  }
		  if (confermapassword != password) {
			  document.getElementById("print").innerHTML= "Le password non coincidono.";
			  $('#confermaPassword').css("borderColor","red");
			  $('#confermaPassword').focus();
			  return false; 
		  }
		  if(confermapassword == password && ck_password.test(password)){
			  document.getElementById("print").innerHTML= "";
			    $('#password').css("borderColor","");
			    $('#confermaPassword').css("borderColor","");
				$('#date').focus();
				return false; 
		  }

	});
	


  
});
/*
 * 
 
 possibile soluzione
 https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps

 
 */