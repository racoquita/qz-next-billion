var App = function() {
	var that = this;
	var cta = $('.cta');
	var frame;
	var currentFrame;
	var num = 3;
	var imgs = [];
	var counter = 0;
	var interval;
	var to=[];
	this.on = function() {
		cta.on('click', that.ctaClickHandler);

		that.createCircle();
		interval = setInterval(function(){
			that.createCircle();
		}, 3000);
	}
	this.off = function() {
		num = 3;

		$.each(to, function(i, tout) {
			clearTimeout(tout)
		});

		clearInterval(interval);
		
		$('.frame').addClass('hide').hide();
		$('.frame3').find('img.chart').attr('src', 'images/f'+num+'-chart.png')
		$('.frame1').removeClass('hide').show();
		$('.circle').remove();
	}
	this.upnum = function (number) {
		return number+1
	}
	this.resetAd = function(){
		
	}
	this.createCircle = function() {
		

		$('.circle').remove();

		for(var i = 0; i < 3; i++) {
			setTimeout(function(){
				$("#qzad").append("<div class='circle'></div>");

				to[1] = setTimeout(function(){
				      $(".circle:last-child").addClass("zoom");
				},100);
				  
				to[2] = setTimeout(function(){
				    $(".circle:first-child").remove();
				},290);
			}, 250 * i)
		}
		
	}
	this.ctaClickHandler = function(e) {
		for (var i = 4; i < 8; i++) {
			imgs[i] = 'images/f'+i+'-chart.png';
		};

		currentFrame = $(e.target).parents('.frame');
		var goTo = $(e.target).closest('a').attr('href');
		

		if (goTo == 'frame4') {
			num = that.upnum(num);
			var chart = $(e.target).parent('.frame3').find('img.chart').attr('src', imgs[num]);
			
			if(num == 8){
				$('.circle').remove();
				currentFrame.addClass('hidden').hide();
				$('.cta-bg, .circle').hide();
				$('.'+goTo).fadeIn(250).removeClass('hidden');
			}
			
		} else {
			currentFrame.addClass('hidden').hide();
			$('.'+goTo).fadeIn('250').removeClass('hidden');
		}

		e.preventDefault();
	}
};