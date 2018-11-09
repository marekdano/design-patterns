/**
 * Prototype design pattern used specifically to clone attributes of an object into new objects, 
 * hence the word prototype. JavaScript does this by creating new objects, 
 * so setting up your own prototype is an important design pattern to know.
 */

function Hello(greeting) {
  this.greeting = greeting || 'Hello World!'; 
}

Hello.prototype.speak = function(somethingElse) { 
  console.log(somethingElse || this.greeting);
}

var hi = new Hello('Just saying hi!');

hi.speak(); 											// Just saying hi!
hi.speak('Something different');  // Something different

var hello = new Hello();					
hello.speak();								// Hello World!
hello.speak('Yep');						// Yep