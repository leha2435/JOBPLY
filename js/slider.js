let slideIndex = 1;
const totalSlides = document.querySelectorAll(".slide").length;
const slideWidth = document.querySelector(".slide").offsetWidth;

showSlides(slideIndex);

// Функция для отображения текущего слайда
function currentSlide(n) {
	showSlides((slideIndex = n));
}

// Функция для переключения слайдов
function showSlides(n) {
	const slidesContainer = document.querySelector(".slides");
	const dots = document.getElementsByClassName("dot");

	if (n > totalSlides) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = totalSlides;
	}

	// Плавное перемещение слайдов
	slidesContainer.style.transform = `translateX(-${
		(slideIndex - 1) * slideWidth
	}px)`;

	// Обновление активной точки
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	dots[slideIndex - 1].className += " active";
}
