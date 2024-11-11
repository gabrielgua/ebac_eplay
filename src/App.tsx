import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

import Header from "./components/Header";
import { GlobalStyles } from "./styles";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="container">
          <Header />
        </div>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
1;
