import { Header, Categories, Sort, PizzaList } from "./components";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <PizzaList/>
        </div>
      </div>
    </div>
  );
}

export default App;
