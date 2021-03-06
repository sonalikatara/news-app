import React, {useRef, useEffect} from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import useInputState from "../hooks/useInputState";
import { sortBy } from "../constants";

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
      width: "60%",
      height: 36,
      margin: "auto",
      marginLeft: 0,
      marginRight: 0
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
      width: "60%",
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
    [theme.breakpoints.up("sm")]: {
      width: "38%",
      marginRight: 0
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      marginRight: theme.spacing(4),
      marginLeft: 0,
      width: "30%"
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

// the top nav that has the search term input control and sorting options
export default function NavBar({ searchNews }) {
  const classes = useStyles();
  let [sortValue, handleSortChange] = useInputState("none");
  let [searchTerm, handleSearchChange] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchNews(searchTerm, sortValue);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      // skip useEffect on First run
      isFirstRun.current = false;
      return;
    }
    searchNews(searchTerm, sortValue);
  },[sortValue]);

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
                placeholder="Enter a Search term to start your search ..."
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
                >
                  <div className={classes.sortContainer} >   
                    <FormControl> 
                      <NativeSelect
                        id="dsort-articles"
                        value={sortValue}
                        className={classes.lightText}
                        onChange={handleSortChange}
                        inputProps={{ "aria-label": "sort articles" }}
                      >
                        {sortBy.map((option, index) => (
                          <option key={option.index+index} value={option.index}>
                            { option.value }
                          </option>
                        ))}
                      </NativeSelect>
                      <FormHelperText className={classes.lightText}>Sort Articles</FormHelperText>
                    </FormControl> 
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
