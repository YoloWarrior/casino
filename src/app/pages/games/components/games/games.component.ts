import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngxs/store";
import { Subscription, combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Game } from "@models/game.model";
import { GamesState } from "@states/games.state";
import { SearchState } from "@states/search.state";
import { slideInAnimation } from "@animations/slide-in.animation";

@Component({
	selector: "games",
	templateUrl: "./games.component.html",
	styleUrls: ["./games.component.scss"],
	animations: [slideInAnimation("-20%", "0")],
})
export class GamesComponent implements OnDestroy {
	games: Game[] = [];

	private subscription = new Subscription();

	isFiltersModalOpened = false;

	constructor(private store: Store) {
		this.subscription.add(
			this.store
				.select(SearchState.isFiltersModalOpened)
				.subscribe((isOpened) => {
					this.isFiltersModalOpened = !!isOpened;
				})
		);

		this.subscription.add(
			combineLatest([
				this.store.select(GamesState.activeFilters),
				this.store.select(SearchState.searchText),
			])
				.pipe(
					switchMap(([activeFilters, searchText]) => {
						return this.store
							.selectOnce(GamesState.searchGames)
							.pipe(
								map((filterFn) =>
									filterFn(
										activeFilters?.map(
											(activeFilter) => activeFilter.title
										) || [""],
										searchText,
										"providerName"
									)
								)
							);
					})
				)
				.subscribe((gamesData) => {
					this.games = gamesData || [];
				})
		);
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
