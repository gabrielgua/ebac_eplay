import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { GlobalStyles } from "./styles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Banner />,
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
