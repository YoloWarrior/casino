import { GameService } from "./../../../core/services/game.service";
import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { GamesState } from "src/app/store/state/games.state";
import { map } from "rxjs/operators";
import { Game } from "src/app/core/models/game.model";

@Component({
	selector: "played-games",
	templateUrl: "./played-games.component.html",
	styleUrls: ["./played-games.component.scss"],
})
export class PlayedGamesComponent {
	playedGames: Game[] = [];

	constructor(private store: Store, private gameService: GameService) {
		this.store
			.select(GamesState.getByIds)
			.pipe(map((filterFn) => filterFn(this.gameService.getPlayedGamesIds())))
			.subscribe((games) => {
				this.playedGames = games;
			});
	}
}
