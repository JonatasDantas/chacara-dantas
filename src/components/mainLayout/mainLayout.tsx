import React, { useState } from 'react';

import { Box, Toolbar } from '@mui/material';

import { NavItem } from '@/types';
import { AppDrawer } from './components/drawer';
import { NavBar } from './components/navBar';

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
    <Box sx={{ display: 'flex' }}>
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar sx={{ p: 1 }} />
        {props.children}
      </Box>
    </Box>
  );
}
