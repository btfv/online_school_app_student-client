import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeworksList from './HomeworksList';
import Homework from '../homework/Homework';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';
import Solution from '../homework/Solution';
import { history } from '../../redux/store';
import { userService } from '../../redux/services/userService';
import StudentProfile from '../profile/StudentProfile';
import DashboardRouter from './DashboardRouter';
import BackLink from '../BackLink';

export default function DashboardComponent() {
  let navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar position='static'>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open-drawer'
            onClick={handleDrawerOpen}
            size='large'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inerhit' noWrap sx={{ flexGrow: 1 }}>
            Student Client
          </Typography>

          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenuClick}
            color='inherit'
            size='large'
            sx={{ my: 1, mx: 1 }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate('/dashboard/profile');
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                userService.logout();
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant='persistent' anchor='left' open={open}>
        <div>
          <IconButton onClick={handleDrawerClose} size='large'>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem component={NavLink} to={'/dashboard/homeworks'} button>
            <ListItemText primary='Homeworks' />
          </ListItem>
        </List>
      </Drawer>
      <BackLink
        onClick={() => {
          navigate(-1);
        }}
      />
      <DashboardRouter />
    </div>
  );
}
