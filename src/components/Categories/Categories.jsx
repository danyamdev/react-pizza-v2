import { useDispatch, useSelector } from "react-redux";

import { setCategoryId } from "../../redux/slice/filterSlice";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
	const categoryId = useSelector((state) => state.filter.categoryId);
	const dispatch = useDispatch();

	const onChangeCategoryId = (id) => dispatch(setCategoryId(id))

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