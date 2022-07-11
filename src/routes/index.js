import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export const routes = [
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