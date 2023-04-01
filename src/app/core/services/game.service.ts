import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class GameService {
	setPlayedGame(id: string) {
		const playedGames = this.getPlayedGamesIds();

		if (playedGames.length == 5) {
			playedGames.shift();
		}

		playedGames.push(id);
		localStorage.setItem(
			"played",
			JSON.stringify(
				playedGames.filter(
					(item, index) => playedGames.lastIndexOf(item) === index
				)
			)
		);
	}

	getPlayedGamesIds(): string[] {
		const playedGames = localStorage.getItem("played") || "";

		return playedGames ? (JSON.parse(playedGames) as string[]) : [];
	}
}
