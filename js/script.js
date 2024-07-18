// hamburger menu
window.onload = function() {
	const nav = document.getElementById('nav-wrapper');
	const hamburger = document.getElementById('js-hamburger');
	const blackBg = document.getElementById('js-black-bg');
	hamburger.addEventListener('click', function() {
		nav.classList.toggle('open');
		document.body.classList.toggle('no-scroll');
	});
	blackBg.addEventListener('click', function() {
		nav.classList.remove('open');
		document.body.classList.remove('no-scroll');
	});
};
//scroll
document.addEventListener('DOMContentLoaded', function() {
	const footerBtnWrap = document.querySelector('.footer-btn__wrap');
	let lazyLoadTriggered = false;

	if (footerBtnWrap) {
		if (window.location.href.indexOf('about') === -1) {
			window.addEventListener('scroll', function onScroll() {
				if (!lazyLoadTriggered) {
					footerBtnWrap.classList.add('visible');
					lazyLoadTriggered = true;
					window.removeEventListener('scroll', onScroll);
				}
			});
		}

		window.addEventListener('scroll', function() {
			const scroll = window.pageYOffset || document.documentElement.scrollTop;
			if (scroll + window.innerHeight >= document.body.scrollHeight) {
				footerBtnWrap.classList.add('hidden');
			} else {
				footerBtnWrap.classList.remove('hidden');
			}
		});
	}

	window.addEventListener('load', function() {
		if (footerBtnWrap) {
			if (window.innerWidth <= 768) {
				footerBtnWrap.classList.add('visible');
			}
		}
	});
});

function restoreFooterButtonState() {
	const isHidden = localStorage.getItem('footerButtonHidden');
	const footerBtn = document.querySelector('.footer-btn');
	if (footerBtn && isHidden === 'true') {
		footerBtn.classList.add('hidden');
	}
}

function toggleFooterButton() {
	const scroll = window.pageYOffset || document.documentElement.scrollTop;
	const footerBtn = document.querySelector('.footer-btn');
	if (footerBtn && !footerBtn.classList.contains('permanently-hidden')) {
		if (scroll > 200) {
			footerBtn.classList.remove('hidden');
		} else {
			footerBtn.classList.add('hidden');
		}
	}
}

window.addEventListener('scroll', function() {
	toggleFooterButton();
});

window.addEventListener('load', function() {
	restoreFooterButtonState();
	toggleFooterButton();
	const closeBtn = document.querySelector('.footer-btn .close-btn');
	const footerBtn = document.querySelector('.footer-btn');
	if (closeBtn) {
		closeBtn.addEventListener('click', function() {
			if (footerBtn) {
				footerBtn.classList.add('permanently-hidden');
				footerBtn.classList.add('hidden');
				localStorage.setItem('footerButtonHidden', 'true');
			}
		});
	}
});

//swiper menu
let swipeOption = {
	loop: true,
	effect: 'fade',
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	speed: 2000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
}

new Swiper('.swiper-container-4', swipeOption);
const mySwiper = new Swiper('.swiper', {
	slidesPerView: 1,
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});
//ナビゲーションスクロール
const header = document.querySelector('#header');
let prevY = window.pageYOffset;

window.addEventListener('scroll', () => {
	const currentY = window.pageYOffset;
	if (currentY < prevY) {
		header.classList.remove('hidden');
	} else {
		if (currentY > 0) {
			header.classList.add('hidden');
		}
	}
	prevY = currentY;
});

const element = document.querySelector('.main-navigation__list')

//アニメーションフェードイン
//メインタイトルフェードイン
gsap.registerPlugin(ScrollTrigger);
 gsap.fromTo(
    ".concept-title, .concept-subtitle", 
    {
    y: 80,
      autoAlpha: 0, 
    },
    {
      y: 0,
			autoAlpha: 1, 
			duration: 0.5,
      scrollTrigger: {
        trigger: ".concept", 
        start: "top center",
      },
    }
);
	
//テキストのフェードイン
	gsap.fromTo(
  ".concept__text", 
	{
		y: 100, 
    autoAlpha: 0, 
  },
	{
		y: 0,
		autoAlpha: 1, 
		duration: 0.5,
    scrollTrigger: {
      trigger: ".concept__text", 
			start: "top center",
    },
  }
);

//画像フェードイン
gsap.fromTo(
  ".concept__picture-1", 
	{
		 y: 100, 
    autoAlpha: 0, 
  },
	{
		y: 0,
		autoAlpha: 1, 
		duration: 0.5,
    scrollTrigger: {
      trigger: ".concept__picture-1", 
			start: "top center",
    },
  }
);

//サブタイトルフェードイン
gsap.fromTo(
  ".features-title", 
  {
    y: 100, 
    autoAlpha: 0, 
  },
  {
    y: 0, 
		autoAlpha: 1, 
		duration: 0.5,
    scrollTrigger: {
      trigger: ".features-title", 
      start: "top center", 
    },
  }
);

//横に並んだ画像下からフェードイン
gsap.fromTo(
  ".features__box-item", 
  {
    y: 100, 
    autoAlpha: 0, 
  },
  {
    y: 0, 
		autoAlpha: 1, 
		stagger: 0.2, 
		duration: 0.5,
    scrollTrigger: {
      trigger: ".features__box-item", 
      start: "top center", 
    },
  }
);
//お知らせテキストのフェードイン
gsap.fromTo(
	".information-title", 
	{
		y: 80, 
		autoAlpha: 0, 
	},
	{
		y: 0, 
		autoAlpha: 1, 
		duration: 0.5,
		scrollTrigger: {
			trigger: ".information-title", 
			start: "top center", 
		},
	}
);
gsap.fromTo(
	".information__list", 
	{
		y: 100, 
		autoAlpha: 0, 
	},
	{
		y: 0, 
		autoAlpha: 1, 
		scrollTrigger: {
			trigger: ".information__list", 
			start: "top center", 
		},
	}
);
//about-pageオーナー紹介
//プロフィール
gsap.fromTo(
	".top-title__txt", 
	{
		y: 50, 
		autoAlpha: 0, 
	},
	{
		y: 0, 
		autoAlpha: 1, 
		duration: 0.5,
		scrollTrigger: {
			start: ".top-title__txt", 
			start: "top center", 
		},
	}
);

//ロケーション
gsap.fromTo(
	".environment__view", 
	{
		y:200, 
		autoAlpha: 0, 
	},
	{
		y: 0, 
		autoAlpha: 1, 
		duration: 1.5,
		scrollTrigger: {
			start: ".environment__view", 
			start: "top center", 
		},
	}
);

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/room.html') {
    var splideElement = document.getElementById('splide');
    if (splideElement) {
      new Splide(splideElement).mount();
    } else {
      console.error('Splide element not found');
    }
  }
});
//外観画像サムネイルスライダー
document.addEventListener('DOMContentLoaded', function () {

    const main = new Splide('#main-carousel', {
        type: 'fade', 
        rewind: true, 
        pagination: false, 
          arrows: false, 
          cover: true, 
    });

    // 画像リストのオプション
    const thumbnails = new Splide('#thumbnail-carousel', {
        rewind: true, 
        arrows: true,
        pagination: false,
        isNavigation: true, 
        perPage: 4, 
        gap: "3%", 
    });
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});

//内観画像サムネイルスライダー
document.addEventListener('DOMContentLoaded', function () {
    const main2 = new Splide('#main-carousel-2', {
      type: 'fade', 
      rewind: true, 
      pagination: false, 
      arrows: false, 
      cover: true, 
    });

  const thumbnails2 = new Splide('#thumbnail-carousel-2', {
    rewind: true,
    arrows: true,
    pagination: false,
    isNavigation: true,
    perPage: 11,
    gap: "3%",
  });
    main2.sync(thumbnails2);
    main2.mount();
    thumbnails2.mount();
});

document.addEventListener('DOMContentLoaded', function () {
  const tl = gsap.timeline({ delay: 0.1 });

  // First animation sequence
  const firstBg = document.querySelectorAll(".slide-bg");
  const word = document.querySelectorAll(".slide-title");
  tl.to(firstBg, {
    scaleX: 1,
    duration: 0.7,
    ease: Power2.easeOut,
  })
  .to(word, {
    opacity: 1,
    duration: 0.6,
  }, "-=0.1")
  .to(firstBg, {
    scaleX: 0,
    duration: 0.7,
    ease: Power2.easeOut,
  });

  // Second animation sequence
  const secondBg = document.querySelector(".slide-bg-tow");
  tl.to(secondBg, {
    scaleX: 0,
    duration: 0.7,
    ease: Power2.easeOut,
  }, "-=0.1"); // Trigger after first animation completes
});


const tl =gsap.timeline({delay:1});
firstBg = document.querySelectorAll(".concept__bg");
word = document.querySelectorAll(".concept__picture-1");

tl.to(
  firstBg, 
  {
    scaleX: 1,
    duration: 0.5,
    ease: Power4.easeOut,
  })
  .to(
    word,
    {
      opacity: 1,
      duration: 0.5,
    },
    "-=0.1"
  )
  .to(firstBg, {
    scaleX: 0,
    duration: 0.5,
    ease: Power4.easeOut,
  });