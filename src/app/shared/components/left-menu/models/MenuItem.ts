import { AppRoutes } from "src/app/core/enum/routes.enum";

export interface MenuItem {
	icon: string;
	title: string;
	route: AppRoutes;
	isHovered: boolean;
}
