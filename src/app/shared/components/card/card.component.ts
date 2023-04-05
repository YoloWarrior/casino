import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Game } from "@models/game.model";

@Component({
	selector: "card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent {
	@Input() card: Game = {};

	@Output() cardClick = new EventEmitter<Game>();

	onCardClick() {
		this.cardClick.emit(this.card);
	}
}
