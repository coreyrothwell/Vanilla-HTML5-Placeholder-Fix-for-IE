/*
**	Vanilla HTML5 Placeholder Fix for IE
**	By Corey Rothwell 
*/
(function(){
	var inputs = document.getElementsByTagName('input');
	for(i=0;i<inputs.length;i++){
		var itemer = inputs[i],
		holder = itemer.getAttribute('placeholder');
		if( holder ) {
			itemer.value = holder;
		}
		itemer.onfocus = function(){
			if(this.value === this.getAttribute('placeholder') ){
				this.value = '';
			}
		};
		itemer.onblur = function(){
			if(this.value === ''){
				this.value = this.getAttribute('placeholder');
			}
		};
	}
})();