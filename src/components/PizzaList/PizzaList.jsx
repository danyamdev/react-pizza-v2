import { PizzaBlock } from "../index";

const PizzaList = () => {
	return (
		<>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				<PizzaBlock/>
				<PizzaBlock/>
				<PizzaBlock/>
				<PizzaBlock/>
				<PizzaBlock/>
			</div>
		</>
	)
};

export default PizzaList;