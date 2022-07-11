const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = ({ value, onChangeCategory }) => {
	return (
		<div className="categories">
			<ul>
				{categories.map((c, i) => (
					<li
						key={c}
						className={value === i ? "active" : ""}
						onClick={() => onChangeCategory(i)}>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
};

export default Categories;