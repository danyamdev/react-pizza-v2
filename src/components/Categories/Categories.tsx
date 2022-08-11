import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterSelector, setCategoryId } from "../../redux/slice/filterSlice";

const categories: string[] = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC = () => {
	const { categoryId } = useSelector(filterSelector);

	const dispatch = useDispatch();

	const onChangeCategoryId = (id: number) => dispatch(setCategoryId(id))

	return (
		<div className="categories">
			<ul>
				{categories.map((c, i) => (
					<li
						key={c}
						className={categoryId === i ? "active" : ""}
						onClick={() => onChangeCategoryId(i)}>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
};

export default Categories;