import { MenuItem } from "./../../models/MenuItem";
import { Component, Input } from "@angular/core";
import { slideInAnimation } from "src/app/shared/animations/slide-in.animation";

@Component({
	selector: "menu-item",
	templateUrl: "./menu-item.component.html",
	styleUrls: ["./menu-item.component.scss"],
	animations: [slideInAnimation("-20%", "0")],
})
export class MenuItemComponent {
	@Input() config: MenuItem | undefined;

	setIsHovered(state: boolean) {
		if (this.config) {
			this.config.isHovered = state;
		}
	}
}
