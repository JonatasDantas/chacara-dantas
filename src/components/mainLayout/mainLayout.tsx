import React, { useState } from 'react';

import { Box } from '@mui/material';

import { NavItem } from '@/types';
import { AppDrawer } from './components/drawer';
import { NavBar } from './components/navBar';

import styles from './mainLayout.module.scss';

export function MainLayout(props: React.PropsWithChildren) {
  const navItems: NavItem[] = [
    { name: 'Home', url: '/home' },
    { name: 'Sobre nós', url: '/sobre-nos' },
    { name: 'Nossa Estrutura', url: '/nossa-estrutura' },
    { name: 'Localização', url: '/localizacao' },
    { name: 'Contato', url: '/contato' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box className={styles.app} sx={{ display: 'flex' }}>
      <NavBar
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box component="nav">
        <AppDrawer
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
      <Box component="main" className={styles.content}>
        {props.children}
      </Box>
    </Box>
  );
}
