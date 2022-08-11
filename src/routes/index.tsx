import React from "react";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export type TRoute = {
	path: string;
	element: JSX.Element;
};

export const routes: TRoute[] = [
	{
		path: "/",
		element: <Home/>
	},
	{
		path: "cart",
		element: <Cart/>
	},
	{
		path: "*",
		element: <NotFound/>
	}
];