import "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
