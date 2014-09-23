var QZSlideshow = function ( opts ) {
	var that 			= this
	, 	slides          = opts.slides
	, 	el              = opts.el
	, 	fadeSpeed       = opts.fadeSpeed || 1000
	, 	delay           = opts.delay || 3000
	, 	firstDelay      = opts.firstDelay || this.delay
	, 	currentPosition = 0
	, 	first           = true;

	var addSlides = function () {
		for (var i = 0; i < slides.length; i++) {
			i == 0 ? el.append('<img src="' + slides[i] + '">') : el.append($('<img src="' + slides[i] + '">').css('display', 'none'));
		}
	};

	var fader = function () {
		first ? setTimeout(function() { swap() }, firstDelay) : swap();
	
		if (this.first) {
			first = false;
			that.timer = setTimeout(fader, firstDelay);
		} else {
			that.timer = setTimeout(fader, delay + fadeSpeed);
		}
	};

	var swap = function () {
		el.find('img').eq(1).css('z-index', 1).show();
		el.find('img').eq(0).css('z-index', 2).fadeOut(fadeSpeed, function(){
			$(this).css('z-index', 1);
			$(this).appendTo(el);
		});
	};

	this.destroy = function () {
		clearTimeout(that.timer);
		el.find('img').remove();    
	};

	this.activate = function () {
		addSlides();
		fader();    
	};

}
