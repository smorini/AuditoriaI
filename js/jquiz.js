/* 
THIS CODE IS CREATED BY THE FOLKS AT WEBSITEDESIGNERNC.COM 
GO VISIT FOR ALL YOUR PROGRAMMING AND WEB DESIGN NEEDS!
*/


$(document).ready(function() {
/*var x = document.getElementsByClassName("example");*/
	var count1 = 0;	
	var howmanyquestions1 = $("#jquiz1 > li").length;
	
	//the function for a clicked item
	$("#jquiz1 li ul li").click(function(){
	
		if (!($(this).parent("ul").hasClass("answered1"))) {
		
			// removes unanswered class and adds answered class so they cannot change answer
			$(this).parent("ul").addClass("answered1");
			
			// runs if they clicked the incorrect answer
			if (!($(this).hasClass("correct"))) {
				// puts strike-through wrong answer and makes their answer red for incorrect
				$(this).addClass("wronganswer");
				$(this).siblings(".correct").addClass("realanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Ohh, te has equivocado!!');
				$(this).parent().parent().children("div").addClass("wrongbox");
				$(this).parent().parent().children("div").fadeTo(500, 1);
			}
			
			// runs if they clicked the correct answer
			if ($(this).hasClass("correct")) {
				//adds one to quiz total correct tally
				count1++;
				// makes correct answer green
				$(this).addClass("correctanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Muy bien, correcto!!');
				$(this).parent().parent().children("div").addClass("rightbox");
				$(this).parent().parent().children("div").fadeTo(750, 1);
			}
			
			if ($('ul.answered1').length == howmanyquestions1) {
				$('#jquizremarks1').fadeIn('slow');
				$('#jquiztotal1').html('Has acertado '+count1+' de '+howmanyquestions1+' preguntas.');
			}
		}
	
	
	});

var count2 = 0;	
	var howmanyquestions2 = $("#jquiz2 > li").length;
	

	//the function for a clicked item
	$("#jquiz2 li ul li").click(function(){
	
		if (!($(this).parent("ul").hasClass("answered2"))) {
		
			// removes unanswered class and adds answered class so they cannot change answer
			$(this).parent("ul").addClass("answered2");
			
			// runs if they clicked the incorrect answer
			if (!($(this).hasClass("correct"))) {
				// puts strike-through wrong answer and makes their answer red for incorrect
				$(this).addClass("wronganswer");
				$(this).siblings(".correct").addClass("realanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Ohh, te has equivocado!!');
				$(this).parent().parent().children("div").addClass("wrongbox");
				$(this).parent().parent().children("div").fadeTo(500, 1);
			}
			
			// runs if they clicked the correct answer
			if ($(this).hasClass("correct")) {
				//adds one to quiz total correct tally
				count2++;
				// makes correct answer green
				$(this).addClass("correctanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Muy bien, correcto!!');
				$(this).parent().parent().children("div").addClass("rightbox");
				$(this).parent().parent().children("div").fadeTo(750, 1);
			}
			
			if ($('ul.answered2').length == howmanyquestions2) {
				$('#jquizremarks2').fadeIn('slow');
				$('#jquiztotal2').html('Has acertado '+count2+' de '+howmanyquestions2+' preguntas.');
			}
		}
	
	
	});

	var count3 = 0;	
	var howmanyquestions3 = $("#jquiz3 > li").length;
	

	//the function for a clicked item
	$("#jquiz3 li ul li").click(function(){
	
		if (!($(this).parent("ul").hasClass("answered3"))) {
		
			// removes unanswered class and adds answered class so they cannot change answer
			$(this).parent("ul").addClass("answered3");
			
			// runs if they clicked the incorrect answer
			if (!($(this).hasClass("correct"))) {
				// puts strike-through wrong answer and makes their answer red for incorrect
				$(this).addClass("wronganswer");
				$(this).siblings(".correct").addClass("realanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Ohh, te has equivocado!!');
				$(this).parent().parent().children("div").addClass("wrongbox");
				$(this).parent().parent().children("div").fadeTo(500, 1);
			}
			
			// runs if they clicked the correct answer
			if ($(this).hasClass("correct")) {
				//adds one to quiz total correct tally
				count3++;
				// makes correct answer green
				$(this).addClass("correctanswer");
				// animate explanation & add styling depending on answer
				$(this).parent().parent().children("div").prepend('Muy bien, correcto!!');
				$(this).parent().parent().children("div").addClass("rightbox");
				$(this).parent().parent().children("div").fadeTo(750, 1);
			}
			
			if ($('ul.answered3').length == howmanyquestions2) {
				$('#jquizremarks3').fadeIn('slow');
				$('#jquiztotal3').html('Has acertado '+count3+' de '+howmanyquestions3+' preguntas.');
			}
		}
	
	
	});













});
