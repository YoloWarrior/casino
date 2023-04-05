import { StateContext } from "@ngxs/store";
import { GamesStateModel } from "@states/games.state";
import { GameMockClient } from "src/app/shared/client/game-mock.client";
import { patch, updateItem } from "@ngxs/store/operators";
import { Filter } from "@models/filter.model";
import { GameService } from "@services/game.service";

export const fetchGames =
	(gameMockClient: GameMockClient) =>
	({ getState, setState }: StateContext<GamesStateModel>) => {
		const state = getState();
		gameMockClient.gamesData$.subscribe((games) => {
			const filters =
				state?.filters && state.filters?.length > 0
					? state.filters
					: games.map((game) => {
							return {
								title: game.providerName as string,
								isActive: false,
							} as Filter;
					  });

			setState({
				...state,
				filters: filters,
				games: games,
			});
		});
	};

export const toggleFilter =
	() =>
	({ setState }: StateContext<GamesStateModel>, { payload }: any) => {
		payload.isActive = !payload.isActive;

		setState(
			patch<GamesStateModel>({
				filters: updateItem<Filter>(
					(filter) => filter?.title === payload.title,
					payload
				),
			})
		);
	};

export const setPlayedGame =
	() =>
	({ getState, setState }: StateContext<GamesStateModel>, { payload }: any) => {
		const state = getState();
		let playedGames = (state.playedGames && [...state.playedGames]) || [];
		const playedGame = state.games?.find((game) => game.id === payload);

		if (playedGames?.length === 5) {
			playedGames?.shift();
		}

		if (playedGame && playedGames) {
			playedGames = [...playedGames, playedGame].filter((obj, index, arr) => {
				return (
					index === arr.length - 1 ||
					!arr.slice(index + 1).some((other) => other.id === obj.id)
				);
			});
		}

		setState(
			patch<GamesStateModel>({
				playedGames: playedGames,
			})
		);
	};

export const fetchPlayedGames =
	(gameService: GameService) =>
	({ getState, setState }: StateContext<GamesStateModel>) => {
		const state = getState();

		setState(
			patch<GamesStateModel>({
				playedGames: state.games?.filter((game) => {
					return gameService.getPlayedGamesIds()?.some((playedGame) => {
						return game.id?.toLowerCase().includes(playedGame.toLowerCase());
					});
				}),
			})
		);
	};
