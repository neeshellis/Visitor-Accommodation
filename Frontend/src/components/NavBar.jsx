import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginForm from './RegisterForm';

export default function NavBar() {
  // Add state for menu functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Add state for accommodation dropdown
  const [accommodationAnchor, setAccommodationAnchor] = useState(null);
  const accommodationOpen = Boolean(accommodationAnchor);

  const [accountAnchor, setAccountAnchor] = useState(null);
  const accountOpen = Boolean(accountAnchor);

  // Add click handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

// Add handler for accommodation dropdown
  const handleAccommodationClick = (event) => {
    setAccommodationAnchor(event.currentTarget);
  };

  const handleAccommodationClose = () => {
    setAccommodationAnchor(null);
  };

   const handleAccountClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchor(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{ 
        backgroundColor: '#5B87AB',}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              mr: 2,
              display: { xs: 'block', md: 'none' } 
            }}
            onClick={handleMenuClick} 
          >
            <MenuIcon />
          </IconButton>
          
          <Box component="div" sx={{ mr: 2 }}>
            <img 
              src="/assets/images/wānaka-magic.png" 
              alt="Wānaka Magic Logo" 
              style={{ 
                height: '100px', 
                width: 'auto' 
              }}
            />
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            <MenuItem 
              component={NavLink} 
              to="/home" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Home
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/accommodation" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Accommodation
            </MenuItem>
            {/* <MenuItem 
             component={NavLink} 
             to="/accommodation/valley-inn" 
             onClick={handleMenuClose}
             sx={{ fontSize: '14px', pl: 4 }} // Indent to show they're sub-items
             >
              • Valley Inn
             </MenuItem>
             <MenuItem 
              component={NavLink} 
              to="/accommodation/bunkhouse" 
              onClick={handleMenuClose}
               sx={{ fontSize: '14px', pl: 4 }} // Indent to show they're sub-items
             >
            • The BunkHouse
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/accommodation/cottage" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px', pl: 4 }} // Indent to show they're sub-items
            >
            • The Cottage
            </MenuItem> */}
            <MenuItem 
              component={NavLink} 
              to="/booking" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Book to Stay
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/reviews" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Reviews
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/activities" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Adventures
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/contact" 
              onClick={handleMenuClose}
              sx={{ fontSize: '14px' }} 
            >
              Contact
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          
          {/* dropdown menu  */}

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/home"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' } 
            }}
          >
            Home
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/accommodation"
            // onClick={handleAccommodationClick}
            // endIcon={<ArrowDropDownIcon />}
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' } 
            }}
          >
            Accommodation
          </Button>

          {/* <Menu
            anchorEl={accommodationAnchor}
            open={accommodationOpen}
            onClose={handleAccommodationClose}
            MenuListProps={{
              'aria-labelledby': 'accommodation-button',
            }}
          >
            <MenuItem 
              component={NavLink} 
              to="/accommodation/valley-inn" 
              onClick={handleAccommodationClose}
            >
              Valley Inn
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/accommodation/bunkhouse" 
              onClick={handleAccommodationClose}
            >
              The BunkHouse
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/accommodation/cottage" 
              onClick={handleAccommodationClose}
            >
              The Cottage
            </MenuItem>
          </Menu> */}

         <Button 
            color="inherit" 
            component={NavLink} 
            to="/booking"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Book to Stay
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/reviews"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Reviews
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/activities"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Activities
          </Button>
       
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/contact"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Contact
          </Button>
          <div>
            <IconButton
              size="large"
              onClick={handleAccountClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={accountAnchor}
              open={accountOpen}
              onClose={handleAccountClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem 
                component={NavLink} 
                to="/login" 
                onClick={handleAccountClose}
                sx={{ fontSize: '14px' }}
              >
                Login
              </MenuItem>
              <MenuItem 
                component={NavLink} 
                to="/register" 
                onClick={handleAccountClose}
                sx={{ fontSize: '14px' }}
              >
                Register
              </MenuItem>
              <MenuItem 
                component={NavLink} 
                to="/profile" 
                onClick={handleAccountClose}
                sx={{ fontSize: '14px' }}
              >
                Profile
              </MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}