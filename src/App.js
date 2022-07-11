import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { routes } from "./routes";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Routes>
            {routes.map(r => (
              <Route key={r.path} path={r.path} element={r.element}/>
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
