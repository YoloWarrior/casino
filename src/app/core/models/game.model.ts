export interface Game {
	id?: string;
	slug?: string;
	tag?: string;
	title?: string;
	thumb?: any;
	providerName?: string;
	[key: string]: string | any;
}
