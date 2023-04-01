import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import {
	RemoveActiveFilter,
	SetActiveFilter,
	SetSearchText,
	ToggleFiltersModal,
	ToggleSearchResultsModal,
} from "../actions/search.actions";
import {
	removeActiveFilter,
	setActiveFilter,
	setSearchText,
	toggleFiltersModal,
	toggleSearchResultsModal,
} from "../actions/search.actions.impl";
import { attachAction } from "@ngxs-labs/attach-action";

export class SearchStateModel {
	text?: string = "";
	activeFilters?: string[] = [];
	isFiltersModalOpened?: boolean;
	isSearchResultsModalOpened?: boolean;
}

@State<SearchStateModel>({
	name: "search",
	defaults: {
		text: "",
		activeFilters: [],
		isFiltersModalOpened: false,
		isSearchResultsModalOpened: false,
	},
})
@Injectable()
export class SearchState {
	constructor() {
		attachAction(SearchState, SetSearchText, setSearchText(""));
		attachAction(SearchState, SetActiveFilter, setActiveFilter(""));
		attachAction(SearchState, RemoveActiveFilter, removeActiveFilter(""));
		attachAction(SearchState, ToggleFiltersModal, toggleFiltersModal());
		attachAction(
			SearchState,
			ToggleSearchResultsModal,
			toggleSearchResultsModal()
		);
	}

	@Selector()
	static searchText(state: SearchStateModel) {
		return state.text;
	}

	@Selector()
	static isFiltersModalOpened(state: SearchStateModel) {
		return state.isFiltersModalOpened;
	}

	@Selector()
	static isSearchResultsModalOpened(state: SearchStateModel) {
		return state.isSearchResultsModalOpened;
	}
}
