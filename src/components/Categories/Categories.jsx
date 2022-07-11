import { useState } from "react";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
	const [isActive, setIsActive] = useState(0);

	return (
		<div className="categories">
			<ul>
				{categories.map((c, i) => (
					<li
						key={c}
						className={isActive === i ? "active" : ""}
						onClick={() => setIsActive(i)}>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
};

export default Categories;