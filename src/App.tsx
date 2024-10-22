import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { GlobalStyles } from "./styles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" bgTheme="gray" />
        <ProductList title="Serão lançados em breve" bgTheme="black" />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
1;
