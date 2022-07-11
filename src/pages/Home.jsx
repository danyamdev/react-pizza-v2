import { useState } from "react";

import { Categories, PizzaList, Sort } from "../components";

const Home = () => {
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: "популярности",
		property: "rating",
	});

	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)}/>
				<Sort value={sortType} onChangeSort={(value) => setSortType(value)}/>
			</div>
			<PizzaList sortType={sortType} categoryId={categoryId}/>
		</>
	)
};

export default Home;