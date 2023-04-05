import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Game } from "@models/game.model";

@Injectable({
	providedIn: "root",
})
export class GameMockClient {
	private readonly dataURL = "assets/game.mock-data.json";
	gamesData$ = new BehaviorSubject<Game[]>([]);

	constructor(private http: HttpClient) {
		this.getAll$().subscribe((games) => {
			this.gamesData$.next(games);
		});
	}

	private getAll$(): Observable<Game[]> {
		return this.http.get<Game[]>(this.dataURL);
	}
}
