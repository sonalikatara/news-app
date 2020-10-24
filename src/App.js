import { useState } from "react";
import theme from "./theme";
import './App.css';
import { ThemeProvider } from "@material-ui/styles";

import Layout from "./components/Layout";


function App() {
  const [news, setNews ] = useState(null);
  
  const searchNews = async (searchQuery, sortBy) => {  
    const everythingNewsUrl =
      `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${sortBy}&language=en&apiKey=1281b5754f724b7081e105c2e75f8d67`;
    
    const topHeadlinesUrl =  'https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=1281b5754f724b7081e105c2e75f8d67';
     
    console.log("searchQuery :", searchQuery, "sortBy : ", sortBy,"everything ::", everythingNewsUrl);
    
    let newsUrl = searchQuery.length ? topHeadlinesUrl:everythingNewsUrl;

    await fetch(newsUrl)
    .then((response) => response.json())
    .then((data) => setNews(data.articles))
    .catch((error) => console.log("Authorization failed : " + error.message));
  };

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Layout searchNews={searchNews} news={news}/>
    </ThemeProvider>
  </div>
  );
}

export default App;
