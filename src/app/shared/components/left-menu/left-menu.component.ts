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
			isHovered: false,
		},
		{
			icon: "assets/icons/games.svg",
			title: "Games",
			isHovered: false,
		},
	];
}
