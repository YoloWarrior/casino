import {
	trigger,
	state,
	style,
	animate,
	transition,
	AnimationTriggerMetadata,
} from "@angular/animations";

export function focusWidthAnimation(
	from: string,
	to: string
): AnimationTriggerMetadata {
	return trigger("focusWidth", [
		state(
			"inactive",
			style({
				width: from,
			})
		),
		state(
			"active",
			style({
				width: to,
			})
		),
		transition("inactive => active", animate("100ms ease-in")),
		transition("active => inactive", animate("100ms ease-out")),
	]);
}
