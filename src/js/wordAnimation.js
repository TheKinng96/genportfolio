const Portfolio = function() {


	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"love Photography.", "have basic skills on Python.", "Love everything about code. And", "create VALUEs."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		typeAnimation: typeAnimation
	}

}();


Portfolio.typeAnimation();
