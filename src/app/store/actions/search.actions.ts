export class SetSearchText {
	static readonly type = "[Search] Set search text";

	constructor(public payload: string) {}
}

export class ToggleFiltersModal {
	static readonly type = "[Search] Toggle filter modal";
}
