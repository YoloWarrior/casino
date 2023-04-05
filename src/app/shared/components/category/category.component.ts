import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { CarouselComponent } from "ngx-owl-carousel-o";
import { Game } from "@models/game.model";
import { Carousel } from "../../utils/carousel.class";
import { Router } from "@angular/router";
import { AppRoutes } from "@enums/routes.enum";

@Component({
	selector: "category",
	templateUrl: "./category.component.html",
	styleUrls: ["./category.component.scss"],
})
export class CategoryComponent extends Carousel implements AfterViewInit {
	@ViewChild("carousel") carousel!: CarouselComponent;

	@Input() title!: string;

	@Input() cards: Game[] = [];

	@Input() autoPlay: boolean = false;

	@Input() loop: boolean = true;

	constructor(private router: Router) {
		super();
	}

	ngAfterViewInit(): void {
		this.setCarouselComponent(this.carousel, this.autoPlay, this.loop);
	}

	onClickGame(game: Game) {
		this.router.navigate([`${AppRoutes.GAMES}`, game.id]);
	}
}
