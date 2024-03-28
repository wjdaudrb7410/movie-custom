import "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { routes } from "./routes";
import { Detail } from "./pages/detail/Detail";
import { Header } from "./components/Header";
import { FoulAccess } from "./pages/404/FoulAccess";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.FoF} element={<FoulAccess />} />
      </Routes>
    </HashRouter>
  );
};
