import {useContext, useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import { SearchContext } from "../../App";
import Skeleton from "../Skeleton";
import { PizzaBlock } from "../index";
import { Pagination } from "../Pagination/Pagination";

import { sortNames } from "../Sort/Sort";
import { setFilters } from "../../redux/slice/filterSlice";
import { fetchPizzas } from "../../redux/slice/pizzasSlice";

const PizzaList = () => {
	const navigate = useNavigate();
	const { search } = useContext(SearchContext);

	const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
	const { items, status } = useSelector(state => state.pizzas);

	const dispatch = useDispatch();

	const isSearch = useRef(false);
	const isMounted = useRef(false);

	const getPizzas = () => {
		const sortBy = `sortBy=${sort.property}&order=desc`;
		const category = categoryId > 0 ? `&category=${categoryId}` : "";
		const page = `&page=${currentPage}&limit=4`;

		dispatch(fetchPizzas({ sortBy, category, search, page }));
	}

	// Если изменили параметры и был первый рендер
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				property: sort.property,
				categoryId,
				currentPage,
			});

			navigate(`?${queryString}`);
		}

		isMounted.current = true;
	}, [sort.property, categoryId, currentPage]);

	// При первом рендере проверяем URL-параметрыи сохраняем в редаксе
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortNames.find(obj => obj.property === params.property);

			dispatch(setFilters({ ...params, sort }));
			isSearch.current = true;
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);

		// if (!isSearch.current) {
			getPizzas();
		// }

		isSearch.current = false;
	}, [sort.property, categoryId, search, currentPage]);

	return (
		<>
			<h2 className="content__title">Все пиццы</h2>
			{status === "error" && <p>Ошибка... Попробуйте позже.</p>}
			<div className="content__items">
				{status === "loading"
					? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
					: items.map(p => <PizzaBlock key={p.id} {...p}/>)
				}
			</div>
			<Pagination currentPage={currentPage} />
		</>
	)
};

export default PizzaList;