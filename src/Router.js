import "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { routes } from "./routes";
import { Detail } from "./pages/detail/Detail";
import { Header } from "./components/Header";
import { FoulAccess } from "./pages/404/FoulAccess";
import { LoginPg } from "./pages/Login/LoginPg";
import { SearchPg } from "./pages/Search/SearchPg";
export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<SearchPg />} />
        <Route path={routes.login} element={<LoginPg />} />
        <Route path={routes.FoF} element={<FoulAccess />} />
      </Routes>
    </HashRouter>
  );
};
