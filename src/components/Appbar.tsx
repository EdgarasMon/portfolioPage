import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../sass/AppBar.sass';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import NightlightIcon from '@mui/icons-material/Nightlight';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const clickSound = new Audio(require('../sounds/click.mp3'));
const switchSound = new Audio(require('../sounds/switch.mp3'));

const ResponsiveAppBar = () => {
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

	let [soundOn, setSoundOn] = React.useState(false);

	React.useEffect(() => {
		if (soundOn) {
			switchSound.play();
		}
	}, [soundOn]);

	const handleSwitchSound = () => {
		if (soundOn) {
			switchSound.play();
			console.log('sound playing');
		}
	};

	const handleClickSound = () => {
		console.log('inside handleClickSound');
		if (soundOn) {
			clickSound.play();
			console.log('sound playing');
		}
	};

	const handleToggleSoundSwitch = () => {
		if (soundOn) {
			console.log('soundOn ', soundOn);
			setSoundOn(false);
		} else {
			console.log('soundOn ', soundOn);
			setSoundOn(true);
		}
	};

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
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
							<MenuItem
								className="menuLinks"
								sx={{
									fontSize: 20,
								}}
							>
								<Link
									onClick={handleClickSound}
									activeClass="active"
									to="homepage"
									spy={true}
									smooth={true}
									offset={-64}
									duration={2000}
								>
									home
								</Link>
							</MenuItem>
							<MenuItem
								className="menuLinks"
								sx={{
									fontSize: 20,
								}}
							>
								<Link
									onClick={handleClickSound}
									activeClass="active"
									to="projects"
									spy={true}
									smooth={true}
									offset={-160}
									duration={2000}
								>
									portfolio
								</Link>
							</MenuItem>{' '}
							<MenuItem
								className="menuLinks"
								sx={{
									fontSize: 20,
								}}
							>
								<Link
									onClick={handleClickSound}
									activeClass="active"
									to="skilsAndTools"
									spy={true}
									smooth={true}
									offset={-160}
									duration={2000}
								>
									skills & tools
								</Link>
							</MenuItem>{' '}
							<MenuItem
								className="menuLinks"
								sx={{
									fontSize: 20,
								}}
							>
								<Link
									onClick={handleClickSound}
									activeClass="active"
									to="about"
									spy={true}
									smooth={true}
									offset={-160}
									duration={2000}
								>
									about
								</Link>
							</MenuItem>{' '}
							<MenuItem
								className="menuLinks"
								sx={{
									fontSize: 20,
								}}
							>
								<Link
									onClick={handleClickSound}
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={-64}
									duration={2000}
								>
									contact
								</Link>
							</MenuItem>
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
						<Button
							className="menuLinks"
							sx={{
								fontSize: 20,
							}}
						>
							<Link
								onClick={handleClickSound}
								activeClass="active"
								to="homepage"
								spy={true}
								smooth={true}
								offset={-64}
								duration={2000}
							>
								🏠
							</Link>
						</Button>
						<Button
							className="menuLinks"
							sx={{
								fontSize: 20,
							}}
						>
							<Link
								onClick={handleClickSound}
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								offset={-160}
								duration={2000}
							>
								💼
							</Link>
						</Button>
						<Button
							className="menuLinks"
							sx={{
								fontSize: 20,
							}}
						>
							<Link
								onClick={handleClickSound}
								activeClass="active"
								to="skilsAndTools"
								spy={true}
								smooth={true}
								offset={-160}
								duration={2000}
							>
								🖥️ 🔧
							</Link>
						</Button>
						<Button
							className="menuLinks"
							sx={{
								fontSize: 20,
							}}
						>
							<Link
								onClick={handleClickSound}
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-160}
								duration={2000}
							>
								🤷
							</Link>
						</Button>
						<Button
							className="menuLinks"
							sx={{
								fontSize: 20,
							}}
						>
							<Link
								onClick={handleClickSound}
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-64}
								duration={2000}
							>
								📲 📧
							</Link>
						</Button>
					</Box>

					<Box sx={{ flexGrow: 2 }}>
						<Switch
							{...label}
							color="default"
							type="checkbox"
							onClick={handleSwitchSound}
						/>

						<NightlightIcon sx={{ fontSize: 20, m: -0.8 }} />

						<Switch
							id="muteSound"
							sx={{ fontSize: 20, ml: 3 }}
							{...label}
							color="default"
							onChange={handleToggleSoundSwitch}
							checked={soundOn}
						/>

						<VolumeUpIcon sx={{ fontSize: 20, m: -0.8 }} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
