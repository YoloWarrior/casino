import { StateContext } from "@ngxs/store";
import { SearchStateModel } from "../state/search.state";
import { append, patch, removeItem } from "@ngxs/store/operators";

export const setSearchText =
	(text: string) =>
	({ setState }: StateContext<SearchStateModel>) => {
		setState({
			text: text,
		});
	};

export const setActiveFilter =
	(activeFilter: string) =>
	({ setState }: StateContext<SearchStateModel>) => {
		setState(
			patch<SearchStateModel>({
				activeFilters: append([activeFilter]),
			})
		);
	};

export const removeActiveFilter =
	(activeFilter: string) =>
	({ setState }: StateContext<SearchStateModel>) => {
		setState(
			patch<SearchStateModel>({
				activeFilters: removeItem<string>(
					(filter) => filter?.includes(activeFilter) ?? false
				),
			})
		);
	};

export const toggleFiltersModal =
	() =>
	({ getState, setState }: StateContext<SearchStateModel>) => {
		const state = getState();

		setState(
			patch<SearchStateModel>({
				isFiltersModalOpened: !state.isFiltersModalOpened,
			})
		);
	};

export const toggleSearchResultsModal =
	() =>
	({ getState, setState }: StateContext<SearchStateModel>) => {
		const state = getState();
		setState(
			patch<SearchStateModel>({
				isSearchResultsModalOpened: !state.isSearchResultsModalOpened,
			})
		);
	};
