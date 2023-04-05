import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutes } from "@enums/routes.enum";

const routes: Routes = [
	{
		path: AppRoutes.HOME,
		loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
	},
	{
		path: AppRoutes.GAMES,
		loadChildren: () =>
			import("./games/games.module").then((m) => m.GamesModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {}
