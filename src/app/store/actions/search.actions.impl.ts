import { StateContext } from "@ngxs/store";
import { SearchStateModel } from "@states/search.state";
import { patch } from "@ngxs/store/operators";

export const setSearchText =
	() =>
	(
		{ setState }: StateContext<SearchStateModel>,
		{ payload }: { payload: string }
	) => {
		setState({
			text: payload,
		});
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
