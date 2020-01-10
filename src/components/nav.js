import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

const StyledNav = styled(AppBar)({
  backgroundColor: '#06274C'
});


class Nav extends React.Component {
  render() {
    return (
      <div>
        <StyledNav position="static">
          <Toolbar>
            <Link className="NavLink" to="/">
              <Button
                color="inherit"
                size="large"
                startIcon={<SearchIcon />}>
              Open Directory Search Tool
              </Button>
          </Link>
          </Toolbar>
        </StyledNav>
      </div>
    )
  }
}

export default Nav;