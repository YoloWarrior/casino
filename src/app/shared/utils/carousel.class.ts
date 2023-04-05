import { Component } from "@angular/core";
import { CarouselComponent } from "ngx-owl-carousel-o";
import { carouselConfig } from "@consts/carousel-config";

@Component({
	template: "",
})
export class Carousel {
	carouselConfiguration = carouselConfig;

	carousel!: CarouselComponent;

	constructor() {}

	setCarouselComponent(
		carouselComponent: CarouselComponent,
		autoPlay = false,
		loop = true
	) {
		this.carousel = carouselComponent;
		this.carouselConfiguration = {
			...this.carouselConfiguration,
			autoplay: autoPlay,
			loop: loop,
		};
	}

	public goNextSlide() {
		this.carousel.next();
	}

	public goPreviousSlide() {
		this.carousel.prev();
	}
}
