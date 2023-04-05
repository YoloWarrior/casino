import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { GamesComponent } from "./components/games/games.component";
import { GameComponent } from "./components/game/game.component";

const routes: Routes = [
	{
		path: "",
		component: GamesComponent,
	},
	{
		path: ":id",
		component: GameComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GamesRoutingModule {}
