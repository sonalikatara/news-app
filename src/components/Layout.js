
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

function Layout({ searchNews, news, isLoading }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <AppAppBar searchNews={searchNews} news={news}/> 
      <NewsList news={news} isLoading={isLoading}/>
    </Paper>
  );
}
export default Layout;