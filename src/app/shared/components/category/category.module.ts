import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryComponent } from "./category.component";
import { CardModule } from "../card/card.module";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
	imports: [CommonModule, CardModule, CarouselModule],
	declarations: [CategoryComponent],
	exports: [CategoryComponent],
})
export class CategoryModule {}
