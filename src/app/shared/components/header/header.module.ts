import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { CategoryModule } from "../category/category.module";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
	imports: [CommonModule, CategoryModule],
	declarations: [HeaderComponent, SearchComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
