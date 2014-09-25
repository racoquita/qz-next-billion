var App = function() {
	var that = this;
	var slides = [
		'images/image-1.jpg',
		'images/image-2.jpg'
	]
	this.init = function () {
		qzslideshow = new QZSlideshow({
				"slides": slides,
				"el": $('#slideshow'),
				"fadeSpeed": 2000,
				"delay": 2000,
				"firstDelay": 2500
		});
		qzslideshow.activate();
	}

	this.on = function() {
		that.init();
	}
	this.off = function() {
		qzslideshow.destroy();
	}
};