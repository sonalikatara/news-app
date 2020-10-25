import { useState } from "react";
import theme from "./theme";
import './App.css';
import { ThemeProvider } from "@material-ui/styles";

import Layout from "./components/Layout";


function App() {
  const [news, setNews ] = useState(null);
  
  // searchNews gets the search results on the searchQuery query sorted by SortBy Top headlines 
  // if there is no search query it gets the top headlines
  const searchNews = async (searchQuery, sortBy) => {   
      if(searchQuery && searchQuery.length > 0 ){
        let everythingNewsUrl =
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
         
        if (sortBy.length > 0) 
            everythingNewsUrl += `&sortBy=${sortBy}`;

        await fetch(everythingNewsUrl)
          .then((response) => response.json())
          .then((data) => setNews(data.articles))
          .catch((error) => console.log("Authorization failed : " + error.message));
      } else {
        setNews([]);
      }   
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
