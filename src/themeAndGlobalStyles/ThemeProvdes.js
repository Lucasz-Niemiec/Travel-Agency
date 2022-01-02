import { ThemeProvider } from "styled-components";

const theme = {
  //colors
  primary: "#D5E87F",
  primary_variation: "#304A17",
  secondary: "#82989C",
  tertiary: "#000",

  //fonts
  titles: "",
  secondary_titles: "",
  text_large: "",
  text_medium: "",
  text_small: "",
  title_font: "",
  text_font: "",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
