import { AppBarProps } from '@/types';
import logo from '@/assets/images/chacara-dantas-transparent.png';

import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import styles from '@/styles/navBar.module.scss';

export function NavBar(props: AppBarProps) {
  return (
    <AppBar
      className={styles.appNavBar}
      component="nav"
      sx={{ backgroundColor: '#fffff', p: 1 }}
      color="inherit"
    >
      <Toolbar className={styles.appToolbar}>
        <IconButton
          className={styles.iconMenu}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none' } }}
        >
          <Menu color="primary" />
        </IconButton>

        <Image className={styles.logo} alt="logo" src={logo} />
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Grid className={styles.navGrid} container spacing={4}>
            {props.navItems.map((item) => (
              <Grid key={item.url} item>
                <Typography
                  className={styles.navItem}
                  variant="h6"
                  sx={{ fontWeight: 400 }}
                >
                  {item.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* {props.navItems.map((item) => (
            <Box key={item.url} sx={{ color: '#000' }}>
              {item.name}
            </Box>
          ))} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
