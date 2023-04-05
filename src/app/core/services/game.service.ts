import { Injectable } from "@angular/core";
import { StorageKeys } from "@enums/storage-keys.enum";

@Injectable({
	providedIn: "root",
})
export class GameService {
	getPlayedGamesIds(): string[] {
		const playedGames = localStorage.getItem(StorageKeys.GAMES) || "";

		return playedGames ? (JSON.parse(playedGames) as string[]) : [];
	}
}
