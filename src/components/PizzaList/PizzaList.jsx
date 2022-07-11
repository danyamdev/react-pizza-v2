import { useEffect, useState } from "react";

import { PizzaBlock } from "../index";
import Skeleton from "../Skeleton";

const PizzaList = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://62ade5f2645d00a28a01a037.mockapi.io/pizza")
			.then(res => res.json())
			.then(json => {
				setPizzas(json);
				setIsLoading(false);
			})
			.catch(e => console.log(e));
	}, []);

	return (
		<>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
					: pizzas.map(p => <PizzaBlock key={p.id} {...p}/>)
				}
			</div>
		</>
	)
};

export default PizzaList;