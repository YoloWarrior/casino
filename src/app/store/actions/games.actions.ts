import { Filter } from "@models/filter.model";

export class FetchGames {
	static readonly type = "[Games] Fetch games";
}

export class ToggleFilter {
	static readonly type = "[Games] Toggle filter";
	constructor(public payload: Filter) {}
}

export class SetPlayedGame {
	static readonly type = "[Games] Set played game";
	constructor(public payload: string) {}
}

export class FetchPlayedGames {
	static readonly type = "[Games] Fetch played game";
}

export class FetchGamesStorageData {
	static readonly type = "[Games] Fetch games storage  data";
}
