import * as React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useEffect,useState } from 'react';


const NavBar =()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768); 
    };
    (()=> {
      checkMobileView();
      console.log(isMobileView);
      if(isMobileView){
        let c=document.getElementById('resp-menu').style;
        c.display="block";
      }
      else{
        console.log("desktop");
        document.getElementById('resp-menu').style.display="none";
      }
    })();   
  }, [isMobileView]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/" id='nav-name'>
          <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge  color="error">
            <HomeIcon />
          </Badge>
          </IconButton>
        </Link>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <Link to="/children" id='nav-name'>
          <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge  color="error">
            <InsertEmoticonSharpIcon />
          </Badge>
          </IconButton>
        </Link>
        <p>Children</p>
      </MenuItem>
      <MenuItem >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge  color="error">
            <SearchIcon />
          </Badge>
        </IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
                alt="suresh"
                src="http://4.bp.blogspot.com/_gWQaU40PH24/TQbPk5rXSII/AAAAAAAAJ6o/mqsPdVO07ZE/s1600/Pirates-of-the-Caribbean-4.jpg"
          />
        </IconButton>
        <p>Suresh</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" style={{backgroundColor:'transparent',boxShadow:'none'}} >
        
        <Toolbar>
        <Box id='img-logo'>
        </Box>
        <div id='resp-menu'>
          <div id="menu-div">
            <div id='menu-item'>
              <Link to="/" id='nav-name' >
                <IconButton aria-label="show 4 new mails" color="inherit" id="link-size-mob">
                  Tv&nbsp;Shows
                </IconButton>
              </Link>
            </div>
            <div id='menu-item'>
              <Link to="/" id='nav-name' >
                <IconButton aria-label="show 4 new mails" color="inherit" id="link-size-mob">
                  Movies
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
        <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} id="nav-but">
                <Link to="/" id='nav-name'>
                  <IconButton aria-label="show 4 new mails" color="inherit" id="link-size">
                    Home
                  </IconButton>
                </Link>
                <Link to="/" id='nav-name' ><IconButton aria-label="show 4 new mails" color="inherit" id="link-size">
                    Tv Shows
                </IconButton>
                </Link>
                <Link to="/" id='nav-name' >
                  <IconButton  aria-label="show 4 new mails" color="inherit" id="link-size" >
                    Movies
                </IconButton>
                </Link>
                <Link to="/" id='nav-name'>
                <IconButton aria-label="show 4 new mails" color="inherit" id="link-size" >
                    News & Popular
                </IconButton>
                </Link>
                <Link to="/" id='nav-name' >
                <IconButton  aria-label="show 4 new mails" color="inherit"id="link-size" >
                    MyList
                </IconButton>
                </Link>
                <Link to="/" id='nav-name'>
                <IconButton  aria-label="show 4 new mails" color="inherit" id="link-size">
                    Browse by Languages
                </IconButton>
                </Link>
            </Box>
        </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit"id="link-size" >
                <SearchIcon />
            </IconButton>
            <Link to="/children" id='nav-name'>
            <IconButton  aria-label="show 4 new mails" color="inherit" id="link-size" style={{marginTop:15}}>
                      Children
            </IconButton>
            </Link>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge  color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="suresh"
                src="http://4.bp.blogspot.com/_gWQaU40PH24/TQbPk5rXSII/AAAAAAAAJ6o/mqsPdVO07ZE/s1600/Pirates-of-the-Caribbean-4.jpg"
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default NavBar;