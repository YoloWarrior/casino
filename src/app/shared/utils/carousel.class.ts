import { Component } from "@angular/core";
import { CarouselComponent } from "ngx-owl-carousel-o";
import { carouselConfig } from "src/app/core/const/carousel-config";

@Component({
	template: "",
})
export class Carousel {
	carouselConfiguration = carouselConfig;

	carousel!: CarouselComponent;

	constructor() {}

	setCarouselComponent(carouselComponent: CarouselComponent, autoPlay = false) {
		this.carousel = carouselComponent;
		this.carouselConfiguration = {
			...this.carouselConfiguration,
			autoplay: autoPlay,
		};
	}

	goNextSlide() {
		this.carousel.next();
	}

	goPreviousSlide() {
		this.carousel.next();
	}
}
