import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
  </Routes>
);

export default AppRoutes;
