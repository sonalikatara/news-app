import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
function ArticleCard(props){
    const { article} = props; 
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea 
                target="_blank" 
                href={article.url}
            >
                <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    alt={article.title || 'Untitled'}   
                    image={article.urlToImage}
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
                 {article.publishedAt.substring(0, 10)}
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
                href={article.url}
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