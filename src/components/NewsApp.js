import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import AppAppBar from "./AppAppBar";
import NewsList from "./NewsList";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    position: "relative",
    margin: "auto",
    padding: 0,
    backgroundColor: "#edecec",
    maxWidth: 1210
  }
});

function NewsApp(props) {
  const classes = useStyles();
  const [news, setNews ] = useState(null);
  const [isLoading, setIsLoading ] = useState(false);

  // Search for articles (in language 'en') by a search string and sorted by the sortString
  const searchNews = async (searchQuery, sortBy) => {  
      setIsLoading(true);

      if(searchQuery && searchQuery.length > 0 ){
        let everythingNewsUrl =
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
         
        if (sortBy.length > 0 && sortBy!=='none') 
            everythingNewsUrl += `&sortBy=${sortBy}`;
  
        await fetch(everythingNewsUrl)
          .then((response) => response.json())
          .then(data => {
                  setNews(data.articles);
                  setIsLoading(false);
                }
            )
          .catch((error) => console.log("Authorization failed : " + error.message)); // TODO:Log in a client-side logging library
      } else {
        setIsLoading(false);  
        setNews([]);
      }   
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <AppAppBar searchNews={searchNews} /> 
      <NewsList news={news} isLoading={isLoading}/>
    </Paper>
  );
}
export default NewsApp;