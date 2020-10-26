
import theme from "./theme";
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import NewsApp from "./components/NewsApp";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NewsApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
