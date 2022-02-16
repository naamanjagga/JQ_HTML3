$(document).ready(function() {
	$('#para1').hide();
	$('#para2').hide();
	$('#para3').hide();
	$('#para4').hide();
	$('#para5').hide();
	$('#para6').hide();
	$('#para7').hide();
	$('#btn1').on('click', function() {
		var name = document.getElementById('Name').value;
		var email = document.getElementById('Email').value;
		var education = $('#Education :selected').text();
		var gender = $('input:radio[name=gender]:checked').val();
		var hobbies = $('input:checkbox[name=hobby]:checked').map(function() {
				return $(this).val();
			}).get();
		var comment = document.getElementById('comment').value;
		var pattern = '^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$';
		console.log(hobbies);
		console.log(email);
		console.log(education);
		console.log(gender);
		console.log(comment);

		if (name == '') {
			$('#para1').show();
            $('#para1').css('color','red');
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para7').hide();
		} else if (email == '') {
			$('#para2').show();
            $('#para2').css('color','red');
            $('#para1').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para7').hide();
		} else if (!email.match(pattern)) {
			$('#para7').show();
            $('#para7').css('color','red');
            $('#para1').hide();
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
		} else if (education == '...') {
			$('#para3').show();
            $('#para3').css('color','red');
            $('#para1').hide();
			$('#para2').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para7').hide();
		} else if (gender == null || gender == '') {
			$('#para4').show();
            $('#para4').css('color','red');
            $('#para1').hide();
			$('#para2').hide();
			$('#para3').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para7').hide();
		} else if (hobbies == '') {
            $('#para5').show();
            $('#para5').css('color','red');
            $('#para1').hide();
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para6').hide();
			$('#para7').hide();
		} else if (comment == '') {
			$('#para6').show();
            $('#para6').css('color','red');
            $('#para1').hide();
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para7').hide();
		} else {
			alert('form submitted successfully');
            $('#para1').hide();
			$('#para2').hide();
			$('#para3').hide();
			$('#para4').hide();
			$('#para5').hide();
			$('#para6').hide();
			$('#para7').hide();
		}
	});
});
