import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngxs/store";
import { Filter } from "src/app/core/models/filter.model";
import { ToggleFilter } from "src/app/store/actions/games.actions";
import { GamesState } from "@states/games.state";
import { Subscription } from "rxjs";

@Component({
	selector: "filter-list",
	templateUrl: "./filter-list.component.html",
	styleUrls: ["./filter-list.component.scss"],
})
export class FilterListComponent implements OnDestroy {
	filters: Filter[] = [];

	private subscription = new Subscription();

	constructor(private store: Store) {
		this.subscription.add(
			this.store.select(GamesState.filters).subscribe((filters) => {
				this.filters = filters || [];
			})
		);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	toggleFilter(filter: Filter) {
		this.store.dispatch(new ToggleFilter({ ...filter }));
	}
}
