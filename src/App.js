import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { routes } from "./routes";

import "./assets/scss/app.scss";

export const SearchContext = createContext();

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              {routes.map(r => (
                <Route key={r.path} path={r.path} element={r.element} search={search}/>
              ))}
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
