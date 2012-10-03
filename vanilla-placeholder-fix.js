/*
**	Vanilla HTML5 Placeholder Fix for IE
**	By Corey Rothwell 
*/
(function(){

	// on focus and blur event handlers
	function i_focus(){
		if(this.value === this.getAttribute('placeholder') ){
			this.value = '';
		}
	}
	function i_blur(){
		if(this.value === ''){
			this.value = this.getAttribute('placeholder');
		}
	}

	// test if placeholder is available, if not, fix it!
	var tester = document.createElement('input');
	if(!('placeholder' in tester)) {

		// get all inputs and loops through them
		var inputs = document.getElementsByTagName('input'),
			i,
			input_length = inputs.length;

		for(i=0; i<input_length; i+=1){
			var itemer = inputs[i],
				holder = itemer.getAttribute('placeholder');

			// put placeholder value in 'value'	
			if( holder ) {
				itemer.value = holder;
			}

			// attach events on focus and blur
			itemer.onfocus = i_focus;
			itemer.onblur = i_blur;
		}
	}

}());