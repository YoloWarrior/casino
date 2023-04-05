import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { focusWidthAnimation } from "@animations/focus-width.animation";
import { SetSearchText, ToggleFiltersModal } from "@actions/search.actions";
import { SearchState } from "@states/search.state";

@Component({
	selector: "search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
	animations: [focusWidthAnimation("70%", "100%")],
})
export class SearchComponent implements OnInit, OnDestroy {
	private readonly searchSubject = new Subject<string | undefined>();

	private subscription = new Subscription();

	searchText: string = "";

	isFiltersModalOpened = false;

	focusState = "inactive";

	constructor(private store: Store) {
		this.subscription.add(
			this.store
				.select(SearchState.isFiltersModalOpened)
				.subscribe((isOpened) => {
					this.isFiltersModalOpened = !!isOpened;
				})
		);

		this.subscription.add(
			this.store.select(SearchState.searchText).subscribe((text) => {
				this.searchText = text as string;
			})
		);
	}

	ngOnInit(): void {
		this.searchSubject
			.pipe(debounceTime(500), distinctUntilChanged())
			.subscribe((text) => {
				console.log(text);
				this.store.dispatch(new SetSearchText(text || ""));
			});
	}

	ngOnDestroy(): void {
		this.searchSubject.unsubscribe();
		this.subscription.unsubscribe();
	}

	onTextChange(event: Event) {
		const searchQuery = (event.target as HTMLInputElement).value;

		this.searchSubject.next(searchQuery);
	}

	toggleFiltersModal() {
		this.store.dispatch(new ToggleFiltersModal());
	}

	setFocusState(state: string) {
		setTimeout(() => {
			this.focusState = state;
		}, 100);
	}
}
