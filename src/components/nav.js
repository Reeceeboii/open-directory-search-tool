import React from 'react'
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';


class Nav extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link className="NavLink" to="/">
              <Button
                color="inherit"
                size="large"
                startIcon={<SearchIcon />}>
              Dorker & advanced search tools
              </Button>
          </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Nav;