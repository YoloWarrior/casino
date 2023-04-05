import { Pipe, PipeTransform } from "@angular/core";

import { uniqBy } from "lodash";

@Pipe({
	name: "unique",
})
export class UniquePipe implements PipeTransform {
	transform(value: any[], property: string): any[] {
		if (value !== undefined && value !== null) {
			return uniqBy(value, property);
		}
		return value;
	}
}
