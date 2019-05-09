class KeyboardController{

	constructor(target){
		this.target = target;
	}



	OnConsole(key) {
		$('.' + key).click(function () {
			console.log($(this).text());
		});
	}

	write(key) {
		$('.' + key).click(function () {
			var key = $(this).text();
			var bksp = $('#bksp').text();
			var enter = $('#enter').text();
			var input = $('#text');
			var inputDivText = input.text();

			if (key !== bksp && key !== enter) {
				input.append(key);


			}
			if (key === enter) {
				input.append("<br>");
			}
			if (key === bksp) {
				var new_input =inputDivText.substring(0, inputDivText.length -21);
				input.empty();
				input.text(new_input);
			}
		});
	}

	showHide(btnShow) {
		var showHideButton = $('#' + btnShow);
		var a = this.target;
		showHideButton.click(function () {
			$('#' + a).toggle();
		})
	}
}

// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	const keyboard = new KeyboardController('kcontainer');
	keyboard.write('key');
	keyboard.OnConsole('key');
	keyboard.showHide('btnShow');
});
