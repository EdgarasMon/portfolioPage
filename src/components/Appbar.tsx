import * as React from 'react';
// import { useRef, useState, useEffect, Ref } from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../sass/AppBar.sass';
import clsx from 'clsx';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SvgIcon from '@mui/material/SvgIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
const clickSound = new Audio(require('../sounds/click.mp3'));
const switchSound = new Audio(require('../sounds/switch.mp3'));

const pages = ['🏠', '💼', '🖥️  🔧', '🤷', '📲 📧'];
const pageNames = ['home', 'portfolio', 'skills & tools', 'about', 'contact'];
const settings = ['Profile', 'Account', 'Dashboard'];
const ResponsiveAppBar = () => {
	const handleSwitch = () => {
		switchSound.volume = 0.4;
		switchSound.play();
	};
	const GreenSwitch = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
			color: pink[600],
			'&:hover': {
				backgroundColor: alpha(
					pink[600],
					theme.palette.action.hoverOpacity
				),
			},
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			backgroundColor: pink[600],
		},
	}));
	const label = { inputProps: { 'aria-label': 'Switch demo' } };

	const executeScroll = () => {
		clickSound.volume = 0.4;
		clickSound.play();
	};

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="fixed" sx={{ background: '#898dda' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							mr: 1,
							xs: 'none',
							md: 'flex',
							fontSize: 10,
							flexGrow: 1,
						}}
					></Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							onMouseDown={executeScroll}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(page => (
								<MenuItem key={page} onClick={executeScroll}>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 10,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						Welcome
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map(page => (
							<Button
								className="menuLinks"
								key={page}
								onClick={executeScroll}
								sx={{
									my: 2,
									color: 'white',
									fontSize: 20,
									display: 'block',
									borderRadius: 0,
								}}
							>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 2 }}>
						<div>
							<Switch
								{...label}
								color="default"
								onClick={handleSwitch}
							/>
							<NightlightIcon sx={{ fontSize: 20, m: -0.8 }} />
							<Switch
								sx={{ fontSize: 20, ml: 3 }}
								{...label}
								color="default"
								onClick={handleSwitch}
							/>
							<VolumeOffIcon sx={{ fontSize: 20, m: -0.8 }} />
						</div>

						<Menu
							sx={{ mt: '60px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
