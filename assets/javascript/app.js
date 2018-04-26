// Countdown is 60 seconds
var count = 60;


// Count of Correct, Wrong, or unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// Game Functions 
$(document).ready(function(){


	$("#mid_game_container").hide();
	$("#end_container").hide();

	

	
	window.scrollTo(0, 500);




	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#start_container").hide();


		// Show the Game Div
		$("#mid_game_container").show();

		startCountdown();
		return;

	});



	// Counts down and displays the timer
	function countdown(){
		count--;
    	$('#timer_number').html(count + " Seconds");

    	
			// Finishes before time is up
			$("#done_button").on("click", function(){

			
			count = 0; 
			return;

			});


			if(count == -1){

				timeUp();

				$("#mid_game_container").hide();

			}


	}


	
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	
	function timeUp(){


		
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Pitcher"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "9"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Designated Hitter"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Making a mistake on defense"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "A pitcher holding a team to no runs, hits, and BB without any errors from his team"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "A left handed pitcher"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "3 balls, 2 strikes"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "9"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "30"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "4"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




		// After answers are validated, display the score results
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score
		$("#end_container").show();


		window.scrollTo(0, 550);

	}

});


