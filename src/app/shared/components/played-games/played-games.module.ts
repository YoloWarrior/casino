import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayedGamesComponent } from "./played-games.component";
import { CategoryModule } from "@components/category/category.module";

@NgModule({
	imports: [CommonModule, CategoryModule],
	declarations: [PlayedGamesComponent],
	exports: [PlayedGamesComponent],
})
export class PlayedGamesModule {}
