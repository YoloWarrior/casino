import { LeftMenuModule } from "./shared/components/left-menu/left-menu.module";
import { HeaderModule } from "./shared/components/header/header.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { GamesState } from "./store/state/games.state";
import { NgxsModule } from "@ngxs/store";
import { environment } from "src/environments/environment";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		AppPagesModule,
		HeaderModule,
		LeftMenuModule,
		NgxsModule.forRoot([GamesState], {
			developmentMode: !environment.production,
		}),
		NgxsStoragePluginModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
