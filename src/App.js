//react
//styles
import { GlobalStyle } from "./GlobalStyles";
import Theme from "./themeAndGlobalStyles/ThemeProvdes";
//components
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionPopular from "./components/SectionPopular";

//

function App() {
  return (
    <Theme>
      <Navbar />
      <Header />
      <SectionPopular />
      <Footer />

      <GlobalStyle />
    </Theme>
  );
}

export default App;
