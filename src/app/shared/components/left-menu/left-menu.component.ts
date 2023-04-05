import { AppRoutes } from "@enums/routes.enum";
import { MenuItem } from "./models/MenuItem";
import { Component } from "@angular/core";

@Component({
	selector: "left-menu",
	templateUrl: "./left-menu.component.html",
	styleUrls: ["./left-menu.component.scss"],
})
export class LeftMenuComponent {
	menuItems: MenuItem[] = [
		{
			icon: "assets/icons/home.svg",
			title: "Home",
			route: AppRoutes.HOME,
			isHovered: false,
		},
		{
			icon: "assets/icons/games.svg",
			title: "Games",
			route: AppRoutes.GAMES,
			isHovered: false,
		},
	];
}
