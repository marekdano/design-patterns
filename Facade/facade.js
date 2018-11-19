/**
 * Facades are a structural pattern which can often be seen in JavaScript libraries
 * like jQuery where, although an implementation may support methods with a wide range of behaviors, 
 * only a “facade” or limited abstraction of these methods is presented to the public for use.
 * 
 * Facades can also be integrated with other patterns such as the Module pattern.
 */

const module = (function() {
	const private = {
		index: 5,
		get: function() {
			console.log(`current value: ${this.index}`)
		},
		set: function(val) {
			this.index = val;
		},
		run: function() {
			console.log("running");
		},
		jump: function() {
			console.log("jumping");
		}
	};

	return {
		facade: function(args) {
			private.set(args.val);
			private.get();
			if (args.run) {
				private.run();
			}
		}
	}
}());

module.facade({ run: true, val: 10 }); // outputs: "current value: 10" "jumping"
