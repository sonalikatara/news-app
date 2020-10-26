import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
//import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import useInputState from "../hooks/useInputState";
import { sortBy } from "../common";

const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    minHeight: "56px",
    padding: theme.spacing(0.5)
  },

  toolBarContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start"
  },

  grow: {
    flexGrow: 1
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.spacing(3),
      width: "60%",
      //border: "solid pink 2px",
      height: 36,
      margin: "auto",
      marginLeft: 0,
      marginRight: 0
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
      width: "60%",
      //border: "solid green 2px",
      height: 36,
      margin: "auto",
      marginRight: 0
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  inputRoot: {
    color: "inherit",
    width: "100%"
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%"
  },

  searchOptions: {
    width: "100%",
    marginRight: theme.spacing(2),
    //border: "solid red 2px",
    [theme.breakpoints.up("sm")]: {
      width: "38%",
      //border: "solid white 2px",
      marginRight: 0
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      marginRight: theme.spacing(4),
      marginLeft: 0,
      width: "30%"
      //border: "solid black 2px"
    }
  },

  sortContainer: {
    marginTop: theme.spacing(1.5)
  },

  lightText: {
    color: "#f9f9f9"
  },

  btnSubmit: {
    width: 100,
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      minWidth: 120
    }
  }
}));

export default function NavBar({ searchNews }) {
  const classes = useStyles();
  let [sortValue, handleSortChange] = useInputState("none");
  let [searchTerm, handleSearchChange] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchNews(searchTerm, sortValue);
  };

  const handleSortByChange = (e) => {
    searchNews(searchTerm, sortValue);
    handleSortChange(e);
  }

  return (
    <AppBar
      color="primary"
      position="fixed"
      className={classes.appBarContainer}
    >
      <ToolBar>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            width="100%"
            maxWidth="1210px"
            margin="auto"
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className={classes.searchOptions}>
              <div>
                <Box
                  display="flex"
                  flexWrap="no-wrap"
                  justifyContent="space-around"
                  // width="100%"
                >
                  <div className={classes.sortContainer}>
                    {/*<InputLabel
                      id="sort-articles-label"
                      className={classes.lightText}
                    >
                      Sort Articles
                    </InputLabel>*/}
                    <Select
                      //labelId="sort-articles-label"
                      id="dsort-articles"
                      value={sortValue}
                      className={classes.lightText}
                      onChange={handleSortByChange}
                    >
                      {sortBy.map((option, index) => (
                        <MenuItem key={option.index+index} value={option.index}>
                          { option.value }
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    color="secondary"
                    className={classes.btnSubmit}
                  >
                    Search
                  </Button>
                </Box>
              </div>
            </div>
          </Box>
        </form>
      </ToolBar>
    </AppBar>
  );
}
