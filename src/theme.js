import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f"
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958"
    },
    heading: {
      main: "#323648",
      light: "#5b5e6D"
    },
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      fontFamilySecondary: "'Roboto Condensed', sans-serif"
    }
  }
});
