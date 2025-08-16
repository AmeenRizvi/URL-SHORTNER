import {createRootRoute} from "@tanstack/react-router";
import App from "../App.jsx";
import { homePageRoute } from "./homepage";
import { dashboard } from "./dashboard";
import { authRoute } from "./auth.route";


export const rootRoute = createRootRoute({
    component: App,
})

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboard,
]);