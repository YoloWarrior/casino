import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { FetchGames } from "./store/actions/games.actions";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	constructor(private store: Store) {
		this.store.dispatch(new FetchGames());
	}
}
