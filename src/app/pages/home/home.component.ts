import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { GamesState } from "src/app/store/state/games.state";
import { map } from "rxjs/operators";
import { Game } from "src/app/core/models/game.model";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
})
export class HomeComponent {
	trandingGames: Game[] = [];

	constructor(private store: Store) {
		this.store
			.select(GamesState.searchGames)
			.pipe(map((filterFn) => filterFn(["hot"])))
			.subscribe((gamesData) => (this.trandingGames = gamesData));
	}
}