if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    
   
var hello= function() {
           
          	 $( ".output-paragraph" ).load( "code-db/hello.txt");

        };

var clear= function() {
           
           $('textarea').html(' ');
        };
var hash= function() {
           
           $('textarea').append('#');
        };
var dot= function() {
           
           $('textarea').append('.');
        };
var o_braces= function() {
           
           $('textarea').append('\{');
        };
var c_braces= function() {
           
           $('textarea').append('\}');
        };
var o_paranthesis= function() {
           
           $('textarea').append('\(');
        };
var c_paranthesis= function() {
           
           $('textarea').append('\)');
        };
var o_bracket= function() {
           
           $('textarea').append('\[');
        };
var c_bracket= function() {
           
           $('textarea').append('\]');
        };
var space= function() {
           
           $('textarea').append(' ');
        };
var backspace= function() {
           
           $('textarea').append('\r');
        };
var new_line= function() {
           
           $('textarea').append('\n');
        };
    var commands = {
    	'hello': hello,
    	'clear': clear,
    	'hash': hash,
    	'dot': dot,
    	'open c': o_braces,
    	'close c': c_braces,
	'open p': o_paranthesis,
    	'close p': c_paranthesis,
    	'open b': o_bracket,
    	'close b': c_bracket,
    	'space': space,
    	'backspace': backspace,
    	'next line': new_line,
        };

    annyang.debug();


    // Add our commands to annyang
    annyang.addCommands(commands);
    
    
    
    
    
    


    // Start listening. You can call this here, or attach this call to an event, button, etc.

    $(".record").click(function() {
        $(this).toggleClass("record-active");

        if ((annyang.start) == true) {

            annyang.stop();
        } else {

            annyang.start();
        }
    });



}