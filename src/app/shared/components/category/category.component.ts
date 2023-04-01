import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { CarouselComponent } from "ngx-owl-carousel-o";
import { Game } from "src/app/core/models/game.model";
import { Carousel } from "../../utils/carousel.class";

@Component({
	selector: "category",
	templateUrl: "./category.component.html",
	styleUrls: ["./category.component.scss"],
})
export class CategoryComponent extends Carousel implements AfterViewInit {
	@ViewChild("carousel") carousel!: CarouselComponent;

	@Input() title!: string;

	@Input() cards: Game[] = [];

	constructor() {
		super();
	}

	ngAfterViewInit(): void {
		this.setCarouselComponent(this.carousel);
	}
}
