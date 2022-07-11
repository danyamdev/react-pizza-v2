import { useContext, useEffect, useState } from "react";

import { SearchContext } from "../../App"
	;
import Skeleton from "../Skeleton";
import { PizzaBlock } from "../index";
import { Pagination } from "../Pagination/Pagination";

const PizzaList = ({ sortType, categoryId }) => {
	const { search } = useContext(SearchContext);

	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		setIsLoading(true);

		const sort = `sortBy=${sortType.property}&order=desc`;
		const category = categoryId > 0 ? `&category=${categoryId}` : "";
		const page = `&page=${currentPage}&limit=4`;

		fetch("https://62ade5f2645d00a28a01a037.mockapi.io/pizza?" + sort + category + `&search=${search}` + page)
			.then(res => res.json())
			.then(json => {
				setPizzas(json);
				setIsLoading(false);
			})
			.catch(e => console.log(e));

		window.scrollTo(0, 0);
	}, [sortType, categoryId, search, currentPage]);

	return (
		<>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
					: pizzas.map(p => <PizzaBlock key={p.id} {...p}/>)
				}
			</div>
			<Pagination currentPage={currentPage} onChangePage={setCurrentPage} />
		</>
	)
};

export default PizzaList;