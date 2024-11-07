import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Game from "./pages/Product";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
    <Route path="/game/:id" element={<Game />}></Route>
  </Routes>
);

export default AppRoutes;
