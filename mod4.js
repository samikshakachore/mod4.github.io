//Ensures there will be no 'console is undefined' errors
window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(s){};
    return c;
})();

//Actual code
var names = ["Lydia","Alexa","Josephine","Emery","Julia","Delilah","Arianna","Vivian","Kaylee","Sophie","Brielle","Madeline","Peyton"];
for (var i=0;i<names.length;i++){
	if (names[i].startsWith("J")){
		console.log("Goodbye"+ names[i])
    }
	else{
		console.log("Hello"+ names[i])
	}
}
