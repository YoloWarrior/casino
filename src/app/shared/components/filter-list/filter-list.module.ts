import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterListComponent } from "./filter-list.component";
import { UniquePipe } from "@pipes/unique.pipe";

@NgModule({
	imports: [CommonModule],
	declarations: [FilterListComponent, UniquePipe],
	exports: [FilterListComponent],
})
export class FilterListModule {}
