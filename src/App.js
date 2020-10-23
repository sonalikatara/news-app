import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Layout from "./components/Layout";
import './App.css';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Layout  />
    </ThemeProvider>
  </div>
  );
}

export default App;
