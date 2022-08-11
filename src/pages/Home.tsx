import React from "react";

import { Categories, PizzaList, Sort } from "../components";

const Home: React.FC = () => {
	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<PizzaList />
		</>
	)
};

export default Home;