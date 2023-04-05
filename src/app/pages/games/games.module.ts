import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoryModule } from "src/app/shared/components/category/category.module";
import { GamesComponent } from "./components/games/games.component";
import { GamesRoutingModule } from "./games-routing.module";
import { GameComponent } from "./components/game/game.component";
import { FilterListModule } from "@components/filter-list/filter-list.module";
import { SearchModule } from "@components/search/search.module";
import { SafePipe } from "@pipes/safe.pipe";

const COMPONENTS = [GamesComponent, GameComponent];

@NgModule({
	imports: [
		CommonModule,
		FilterListModule,
		SearchModule,
		GamesRoutingModule,
		CategoryModule,
	],
	declarations: [...COMPONENTS, SafePipe],
})
export class GamesModule {}
