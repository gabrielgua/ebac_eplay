import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

import Header from "./components/Header";
import { AppWrapper, GlobalStyles } from "./styles";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppWrapper>
          <div className="container">
            <Header />
          </div>
          <AppRoutes />
          <Footer />
          <Cart />
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
1;
