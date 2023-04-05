import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngxs/store";
import { GamesState } from "@states/games.state";
import { Game } from "@models/game.model";
import { Subscription } from "rxjs";

@Component({
	selector: "played-games",
	templateUrl: "./played-games.component.html",
	styleUrls: ["./played-games.component.scss"],
})
export class PlayedGamesComponent implements OnDestroy {
	playedGames: Game[] = [];

	private subscription = new Subscription();

	constructor(private store: Store) {
		this.subscription.add(
			this.store.select(GamesState.getPlayedGames).subscribe((games) => {
				if (games && games?.length > 0) {
					const reversedGames = [...games].reverse();
					this.playedGames = reversedGames || [];
				}
			})
		);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
