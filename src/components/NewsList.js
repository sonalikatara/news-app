import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from "uuid";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles(theme => ({
    news: {
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(3),
      minHeight: 'calc(100vh - 132px)',
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(14),
      }
    },
  
    center: {
      marginTop: '30vh',
      marginBottom: '30vh',
      textAlign: 'center',
    },
  }));

 function NewsList(props){
    const { news } = props;
    const classes = useStyles();
    let noArticlesMsg = "";

    // on first load ask the user to add a search string to get Articles
    // Inform the user if there are no articles for the enteered search term 
    if (!news)
        noArticlesMsg = "Search for articles by a search string.";
    else if(news.length === 0)
        noArticlesMsg = "No articles for your search at the moment."

    return(
        <Container className={classes.news} maxWidth="md" >
           
            { noArticlesMsg.length > 0  && (
                <Typography color={"textSecondary"} className={classes.center}>
                    {noArticlesMsg}
                </Typography>
            )}     

            <Grid container spacing={4} >
                {news && 
                    news.map( article => (
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={uuidv4()}>
                        <ArticleCard article={article}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default NewsList;