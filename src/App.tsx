import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { GlobalStyles } from "./styles";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
1;
