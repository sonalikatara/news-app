
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

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
function Layout({ searchNews }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      AppAppBAr
    </Paper>
  );
}
export default Layout;