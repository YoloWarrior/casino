import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngxs/store";
import { map, switchMap } from "rxjs/operators";
import { Game } from "@models/game.model";
import { SetPlayedGame } from "@actions/games.actions";
import { GamesState } from "@states/games.state";
import { Subscription } from "rxjs";

@Component({
	selector: "game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit, OnDestroy {
	game: Game = {};

	private subscription = new Subscription();

	constructor(private store: Store, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.subscription.add(
			this.route.paramMap
				.pipe(
					switchMap((params) => {
						const id = params.get("id") || null;

						this.store.dispatch(new SetPlayedGame(id as string));

						return this.store
							.select(GamesState.getById)
							.pipe(map((filterFn) => filterFn(id ?? "")));
					})
				)
				.subscribe((game) => {
					if (game) {
						this.game = game || {};
					}
				})
		);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
