import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngxs/store";
import { GamesState } from "@states/games.state";
import { map } from "rxjs/operators";
import { Game } from "@models/game.model";
import { Subscription } from "rxjs";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
})
export class HomeComponent implements OnDestroy {
	trandingGames: Game[] = [];

	private subscription = new Subscription();

	constructor(private store: Store) {
		this.subscription.add(
			this.store
				.select(GamesState.searchGames)
				.pipe(map((filterFn) => filterFn(["hot"], "", "tag")))
				.subscribe((gamesData) => {
					this.trandingGames = gamesData || [];
				})
		);
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
