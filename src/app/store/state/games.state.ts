import { Injectable } from "@angular/core";
import { Selector, State, Store } from "@ngxs/store";
import { attachAction } from "@ngxs-labs/attach-action";
import { Game } from "@models/game.model";
import {
	FetchGames,
	FetchPlayedGames,
	SetPlayedGame,
	ToggleFilter,
} from "@actions/games.actions";
import {
	fetchGames,
	fetchPlayedGames,
	setPlayedGame,
	toggleFilter,
} from "@actions/games.actions.impl";
import { GameMockClient } from "src/app/shared/client/game-mock.client";
import { Filter } from "@models/filter.model";
import { GameService } from "@services/game.service";

export interface GamesStateProps {
	games?: Game[];
	filters?: Filter[];
	playedGames?: Game[];
}

export class GamesStateModel implements GamesStateProps {
	games?: Game[];
	filters?: Filter[];
	playedGames?: Game[];
}

@State<GamesStateModel>({
	name: "games",
	defaults: {
		games: [],
		filters: [],
		playedGames: [],
	},
})
@Injectable()
export class GamesState {
	constructor(
		private gameMockClient: GameMockClient,
		private gameService: GameService,
		private store: Store
	) {
		attachAction(GamesState, FetchGames, fetchGames(gameMockClient));
		attachAction(GamesState, ToggleFilter, toggleFilter());
		attachAction(GamesState, FetchPlayedGames, fetchPlayedGames(gameService));
		attachAction(GamesState, SetPlayedGame, setPlayedGame());
	}

	@Selector()
	static searchGames(state: GamesStateModel) {
		return (
			filters?: string[],
			searchTerm?: string,
			filterProperty?: string
		) => {
			return state.games?.filter((game) => {
				let isExist = true;

				if (filters && filters.length > 0 && filterProperty != "") {
					isExist = filters?.some((filter) => {
						return game[filterProperty ?? "tag"]
							?.toLowerCase()
							.includes(filter.toLowerCase());
					});
				}

				if (searchTerm != undefined && searchTerm != "") {
					isExist = Object.values(game).some((value) => {
						if (
							value != null &&
							value != undefined &&
							typeof value == "string"
						) {
							return value
								?.toLowerCase()
								.includes(searchTerm.toLocaleLowerCase());
						} else {
							return false;
						}
					});
				}

				return isExist;
			});
		};
	}

	@Selector()
	static getPlayedGames(state: GamesStateModel) {
		return state.playedGames;
	}

	@Selector()
	static getById(state: GamesStateModel) {
		return (id: string) => {
			return state.games?.find((game) => game.id === id);
		};
	}

	@Selector()
	static filters(state: GamesStateModel) {
		return state.filters;
	}

	@Selector()
	static games(state: GamesStateModel) {
		return state.games;
	}

	@Selector()
	static activeFilters(state: GamesStateModel) {
		return state.filters?.filter((filter) => filter.isActive);
	}
}
