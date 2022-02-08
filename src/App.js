//react
//styles
import { GlobalStyle } from "./GlobalStyles";
import Theme from "./themeAndGlobalStyles/ThemeProvider";
//components
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionPopular from "./components/SectionPopular";
import CardsInfo from "./components/CardsInfo";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Reserves from "./components/Reserves";

//

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<SectionPopular />} />
        <Route path="/popular/:id" element={<CardsInfo />} />
        <Route path="/reserves" element={<Reserves />} />
      </Routes>
      <Footer />
    </Theme>
  );
}

export default App;
