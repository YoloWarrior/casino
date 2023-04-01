import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { focusWidthAnimation } from "src/app/shared/animations/focus-width.animation";
import {
	ToggleFiltersModal,
	ToggleSearchResultsModal,
} from "src/app/store/actions/search.actions";
import { SearchState } from "src/app/store/state/search.state";

@Component({
	selector: "search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
	animations: [focusWidthAnimation("20%", "30%")],
})
export class SearchComponent {
	isFiltersModalOpened = false;

	focusState = "inactive";

	constructor(private store: Store) {
		this.store
			.select(SearchState.isFiltersModalOpened)
			.subscribe((isOpened) => {
				this.isFiltersModalOpened = !!isOpened;
			});
	}

	toggleFiltersModal() {
		this.store.dispatch(new ToggleFiltersModal());
	}

	toggleSearchResultsModal() {
		this.store.dispatch(new ToggleSearchResultsModal());
	}
}
