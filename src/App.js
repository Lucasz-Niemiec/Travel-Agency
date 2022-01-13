//react
//styles
import { GlobalStyle } from "./GlobalStyles";
import Theme from "./themeAndGlobalStyles/ThemeProvdes";
//components
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionPopular from "./components/SectionPopular";
import CardsInfo from "./components/CardsInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//

function App() {
  return (
    <Theme>
      <Router>
        <Navbar />
        <Header />
        <SectionPopular />
        <Routes>
          <Route path=":id" element={<CardsInfo />} />
        </Routes>
        <GlobalStyle />
        <Footer />
      </Router>
    </Theme>
  );
}

export default App;
