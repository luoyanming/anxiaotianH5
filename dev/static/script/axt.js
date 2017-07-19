
$(function() {
	// var _win = $(window),
	var _win = $(window),
		_winH = _win.height(),
		fPage = $('#fullpage');

	var AXT = {
		init: function() {
			// AXT.bind();
			// AXT.checkAni(0);

			AXT.btnNavBind();
			AXT.fullpageInit();
			AXT.topbarBuyBind();
		},
		bind: function() {
			AXT.windowScrollBind();
		},
		windowScrollBind: function() {
			_win.on('scroll', function() {
				var _scrollH = _win.scrollTop();

				AXT.checkAni(_scrollH);
			});
		},
		checkAni: function(_scrollH) {
			var aniObj = $('[data-animation *= "active"]');

			aniObj.each(function() {
				var _this = $(this),
					aniClass = _this.attr('data-animation');
					_offsetTop = _this.offset().top;

				if(_this.hasClass(aniClass)) {
					return;
				} else {
					if(_winH + _scrollH > _offsetTop + $('header').height()) {
						_this.addClass(aniClass);
					}
				}
			});
		},
		btnNavBind: function() {
			var btnNav = $('.header .btn-nav'),
				menu = $('.header .menu');

			btnNav.on('click', function() {
				btnNav.toggleClass('btn-nav-active');
				menu.fadeToggle(300);
			});

			menu.on('click', function(e) {
				if(e.target.className == 'menu') {
					btnNav.toggleClass('btn-nav-active');
					menu.fadeToggle(300);
				}
			});
		},
		fullpageInit: function() {
			if(fPage.length == 0) {
				return false;
			}

			fPage.fullpage({
				// navigation: true,
				paddingTop: '2.5rem',
				onLeave: function(index, nextIndex, direction){
					if(index == 1) {
						$('.header').removeClass('header-index');
					}

					if(nextIndex == 1) {
						$('.header').addClass('header-index');
					}
				}
			});
		},
		topbarBuyBind: function() {
			if($('.topbar-buy').length == 0) {
				return false;
			}

			_win.on('scroll', function() {
				var _scrollH = _win.scrollTop(),
					objHeader = $('.header'),
					objTopbar = $('.topbar-buy');

				if(_scrollH < 200) {
					if(objHeader.hasClass('showFlag')) {
						return false;
					} else {
						objHeader.addClass('showFlag').fadeIn(300);
						objTopbar.hide();
					}
				} else {
					if(objHeader.hasClass('showFlag')) {
						objHeader.removeClass('showFlag').hide();
						objTopbar.fadeIn(300);
					} else {
						return false;
					}
				}
			});
		}
	};

	AXT.init();
});







