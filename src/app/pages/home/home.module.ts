import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromoComponent } from "./components/promo/promo.component";
import { CategoryModule } from "@components/category/category.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";

const COMPONENTS = [HomeComponent, PromoComponent];

@NgModule({
	imports: [CommonModule, HomeRoutingModule, CategoryModule],
	declarations: [...COMPONENTS],
})
export class HomeModule {}
