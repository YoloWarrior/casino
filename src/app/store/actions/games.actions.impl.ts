import { StateContext } from "@ngxs/store";
import { GamesStateModel } from "../state/games.state";
import { GameMockClient } from "src/app/shared/client/game-mock.client";

export const fetchGames =
	(gameMockClient: GameMockClient) =>
	({ setState }: StateContext<GamesStateModel>) => {
		gameMockClient.gamesData$.subscribe((games) => {
			setState({
				games: games,
			});
		});
	};
