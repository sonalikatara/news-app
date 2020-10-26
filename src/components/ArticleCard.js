import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlaceholderImg from '../media/news.svg';

const useStyles = makeStyles(theme => ({    
      root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
      },

      title: {
        color: theme.palette.text.primary,
        overflow: 'hidden',
        textAlign: "left",
      },

      description: {
        color: theme.palette.text.secondry,
        overflow: 'hidden',
        textAlign: "left",
       display: "none",
        [theme.breakpoints.up("sm")]: {
            display: 'block',
          }
      },
      
      content: {
        marginBottom: 'auto',
        marginRight:theme.spacing(1),
        marginLeft:theme.spacing(1),
      },

      actions: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        
      },
  }));

//shows the image, title, publish date, description and the url (as 'Read More' button) of the articles
function ArticleCard({ article}){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea 
                target="_blank" 
                href={article.url}  // Clicking the image will open the article in a new tab
            >
                <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    alt={article.title || 'Untitled'}   
                    image={ article.urlToImage ? article.urlToImage : PlaceholderImg}
                    title={article.title || 'Untitled'}
                />       
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h6" className={classes.title}>
                {article.title}
                </Typography>
                <Typography
                variant="caption"
                component="div"
                align="left" 
                color="secondary"
                >
                 {new Date(article.publishedAt).toString().slice(4,15)}
                </Typography>
                <Typography 
                 className={classes.description}
                  variant="subtitle2" 
                  aria-label={article.title || 'Untitled'}   
                  color="textSecondary" 
                  
                  >
                {article.description}
                
                </Typography>
                
            </CardContent>       
            <CardActions
             className={classes.actions}>
            <Button 
                variant="contained" 
                size="medium" 
                color="primary" 
                target="_blank" 
                href={article.url}   //Clicking the 'Read More' button will open the article in a new tab
                >

                Read More
            </Button>
            </CardActions>
        </Card>
        );
    
}

ArticleCard.propTypes = {
    article: PropTypes.instanceOf(Object).isRequired,
};

export default ArticleCard