import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { CategoryModule } from "../shared/components/category/category.module";
import { PromoComponent } from "./home/components/promo/promo.component";

const COMPONENTS = [HomeComponent, PromoComponent];

@NgModule({
	imports: [CommonModule, CategoryModule, AppPagesRoutingModule],
	declarations: [...COMPONENTS],
	exports: [...COMPONENTS],
})
export class AppPagesModule {}
