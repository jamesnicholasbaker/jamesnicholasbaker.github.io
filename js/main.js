function askQuestions() {


	var firstName = prompt("What is your first name?");
	var lastName = prompt("What is your last name?");
	var fullName = firstName + ' ' + lastName;

	if (firstName === "General" && lastName !== "Assembly") {
		console.log("Greetings " + fullName + ". Welcome to my website!");
	} else 
		console.log("ACCESS DENIED. Only the General is welcome here.")


	var age = prompt("How old are you?");
	age = parseInt(age);

	if (age>=18) {
		console.log("User is an adult.");

	} else if (age<18) {
		console.log("WARNING. User is a child.");

	} else {
		console.log("HMMMM");
	}


	var faveColour = prompt("What is your favourite colour?").toLowerCase();

	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow') {

		$('h1').css('color', faveColour);
	}

}

// When the page loads
$(function() {				// when we use an anonymous function in jQuery (i.e. with the $ before), jQuery knows to run a specific function.

	$('img').on('click', askQuestions);

	// Hides all the content in every section that follows an 'h3'
	$('h3').next().hide();

	// When the user clicks an h3 (as an alternative, could also do 'hover')
	$('h3').on('click', function() {

		var target = $(this).next();

		//Hide any content that's open
		$('h3').next().not(target).slideUp(500);

		// Toggle the next element on and off when it is clicked
		$(this).next().slideToggle();				//'this', in this context, refers to the specific element that is being clicked on
											//.next means move to the next element on the line
											//.toggle means toggle this element on and off when clicked. Could also use things like 'hide' and 'slideToggle'

	});

});
