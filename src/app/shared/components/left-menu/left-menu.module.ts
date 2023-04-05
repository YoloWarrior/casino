import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LeftMenuComponent } from "./left-menu.component";
import { InlineSVGModule } from "ng-inline-svg";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BrowserAnimationsModule,
		InlineSVGModule.forRoot(),
	],
	declarations: [LeftMenuComponent, MenuItemComponent],
	exports: [LeftMenuComponent],
})
export class LeftMenuModule {}
