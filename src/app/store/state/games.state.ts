import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { attachAction } from "@ngxs-labs/attach-action";
import { Game } from "./../../core/models/game.model";
import { FetchGames } from "../actions/games.actions";
import { fetchGames } from "../actions/games.actions.impl";
import { GameMockClient } from "src/app/shared/client/game-mock.client";

export class GamesStateModel {
	games: Game[] = [];
}

@State<GamesStateModel>({
	name: "games",
	defaults: {
		games: [],
	},
})
@Injectable()
export class GamesState {
	constructor(private gameMockClient: GameMockClient) {
		attachAction(GamesState, FetchGames, fetchGames(gameMockClient));
	}

	@Selector()
	static searchGames(state: GamesStateModel) {
		return (filters?: string[], searchTerm?: string) => {
			return state.games.filter((game) => {
				let isExist = false;

				if (filters && filters.length > 0) {
					isExist = filters?.some((filter) => {
						return game.tag?.toLowerCase().includes(filter.toLowerCase());
					});
				}

				if (searchTerm) {
					isExist = game.title?.includes(searchTerm) ?? false;
				}

				return isExist;
			});
		};
	}
}
