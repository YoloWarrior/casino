import { Injectable } from "@angular/core";
import { Selector, State } from "@ngxs/store";
import { SetSearchText, ToggleFiltersModal } from "@actions/search.actions";
import {
	setSearchText,
	toggleFiltersModal,
} from "@actions/search.actions.impl";
import { attachAction } from "@ngxs-labs/attach-action";

export interface SearchStateModel {
	text?: string;
	isFiltersModalOpened?: boolean;
	isSearchResultsModalOpened?: boolean;
}

@State<SearchStateModel>({
	name: "search",
	defaults: {
		text: "",
		isFiltersModalOpened: false,
		isSearchResultsModalOpened: false,
	},
})
@Injectable()
export class SearchState {
	constructor() {
		attachAction(SearchState, SetSearchText, setSearchText());
		attachAction(SearchState, ToggleFiltersModal, toggleFiltersModal());
	}

	@Selector()
	static searchText(state: SearchStateModel) {
		return state.text;
	}

	@Selector()
	static isFiltersModalOpened(state: SearchStateModel) {
		return state.isFiltersModalOpened;
	}
}
