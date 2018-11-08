/**
 * The module pattern is probably the most commonly used pattern after prototype. 
 * Modules should be Immediately-Invoked-Function-Expressions (IIFE). All of the module code exists within a closure. 
 * Import variables by passing in values through the function execution. Export variables (expose variables) by returning an object.
 * A module should be used in any system beyond a single function JavaScript. 
 * It’s helpful not to pollute the global namespace and keep your functions importable and exportable.
 * Module design patterns keeps particular pieces of code independent of other components. 
 */

const options = {
	defaultCount: 0
}

const Exposer = (function(params) {
  let privateVariable = params.defaultCount;

  const privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  const methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  const otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})(options);

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined