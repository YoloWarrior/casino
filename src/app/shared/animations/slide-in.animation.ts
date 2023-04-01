import {
	animate,
	AnimationTriggerMetadata,
	style,
	transition,
	trigger,
} from "@angular/animations";

export function slideInAnimation(
	from: string,
	to: string
): AnimationTriggerMetadata {
	return trigger("slideIn", [
		transition(":enter", [
			style({ transform: `translateY(${from})` }),
			animate("0.3s ease-out", style({ transform: `translateY(${to})` })),
		]),
		transition(":leave", [
			animate("0.1s ease-out", style({ transform: `translateY(${from})` })),
		]),
	]);
}
