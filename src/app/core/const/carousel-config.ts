import { OwlOptions } from "ngx-owl-carousel-o";

export const carouselConfig: OwlOptions = {
	loop: true,
	mouseDrag: true,
	lazyLoad: false,
	autoWidth: true,
	autoplay: true,
	autoplayHoverPause: true,
	autoplayTimeout: 3000,
	dragEndSpeed: 500,
	fluidSpeed: true,
	autoplaySpeed: 1000,
	items: 5,
	pullDrag: false,
	dots: false,
	navSpeed: 1400,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 3,
		},
		992: {
			items: 4,
		},
		1200: {
			items: 5,
		},
		1600: {
			items: 6,
		},
	},
};
