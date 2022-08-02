import { Categories, PizzaList, Sort } from "../components";

const Home = () => {
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