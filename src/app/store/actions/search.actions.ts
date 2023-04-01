export class SetSearchText {
	static readonly type = "[Search] Set search text";
	constructor(public payload: string) {}
}

export class SetActiveFilter {
	static readonly type = "[Search] Set active  filter";
	constructor(public payload: string) {}
}

export class RemoveActiveFilter {
	static readonly type = "[Search] Remove active  filter";
	constructor(public payload: string) {}
}

export class ToggleFiltersModal {
	static readonly type = "[Search] Toggle filter modal";
}

export class ToggleSearchResultsModal {
	static readonly type = "[Search] Toggle search results modal";
}
