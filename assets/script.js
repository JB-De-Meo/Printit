document.addEventListener('DOMContentLoaded', function() {
	const slides = [
	  {
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	  },
	  {
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	  },
	  {
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	  },
	  {
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	  }
	];
  
	const dotsContainer = document.querySelector('.dots');
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
  
	let currentSlideIndex = 0;
  
	function addDots() {
	  slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.addEventListener('click', () => {
		  goToSlide(index);
		  
		});
		dotsContainer.appendChild(dot);
	  });
	}
  
	function updateActiveDot(activeIndex) {
	  const dots = document.querySelectorAll('.dot');
	  dots.forEach((dot, index) => {
		if (index === activeIndex) {
		  dot.classList.add('dot_selected');
		} else {
		  dot.classList.remove('dot_selected');
		}
	  });
	}
  
	function goToSlide(index) {
	  if (index >= 0 && index < slides.length) {
		currentSlideIndex = index;
		const bannerImages = document.querySelectorAll('.banner-img');
		const bannerTaglines = document.querySelectorAll('#banner p');
		bannerImages.forEach((image, i) => {
		  if (i === index) {
			image.style.display = 'block';
		  } else {
			image.style.display = 'none';
		  }
		});
		bannerTaglines.forEach((tagline, i) => {
		  if (i === index) {
			tagline.style.display = 'block';
		  } else {
			tagline.style.display = 'none';
		  }
		});
		updateActiveDot(index);
	  }
	}
  
	function scrollLeft() {
	  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	  goToSlide(currentSlideIndex);
	}
  
	function scrollRight() {
	  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	  goToSlide(currentSlideIndex);
	}
  
	leftArrow.addEventListener('click', scrollLeft);
	rightArrow.addEventListener('click', scrollRight);
  
	function initCarousel() {
	  slides.forEach((slide, index) => {
		const banner = document.getElementById('banner');
		const bannerImg = document.createElement('img');
		bannerImg.classList.add('banner-img');
		bannerImg.src = `./assets/images/slideshow/${slide.image}`;
		bannerImg.alt = `Slide ${index + 1}`;
		if (index === 0) {
		  bannerImg.style.display = 'block';
		} else {
		  bannerImg.style.display = 'none';
		}
		banner.appendChild(bannerImg);
  
		const bannerText = document.createElement('p');
		bannerText.innerHTML = slide.tagLine;
		if (index === 0) {
		  bannerText.style.display = 'block';
		} else {
		  bannerText.style.display = 'none';
		}
		banner.appendChild(bannerText);
	  });
	  addDots();
	  updateActiveDot(currentSlideIndex);
	}
  
	window.addEventListener('load', function() {
	  initCarousel();
	});
  });
  