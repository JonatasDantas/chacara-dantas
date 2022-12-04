import React, { useState } from 'react';

import { Box } from '@mui/material';

import { NavItem } from '@/types';
import { AppDrawer } from './components/drawer';
import { NavBar } from './components/navBar';

import styles from './mainLayout.module.scss';
import { useRouter } from 'next/router';

export function MainLayout(props: React.PropsWithChildren) {
  const router = useRouter();
  const navItems: NavItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Nossa Estrutura', url: '/estrutura' },
    { name: 'Galeria de Fotos', url: '/galeria' },
    { name: 'Localização', url: '/localizacao' },
    { name: 'Contato', url: '/contato' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePageRedirect = (href: string) => {
    router.push(href);
  };

  return (
    <Box className={styles.app} sx={{ display: 'flex' }}>
      <NavBar
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        handlePageRedirect={handlePageRedirect}
      />
      <Box component="nav">
        <AppDrawer
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          handlePageRedirect={handlePageRedirect}
        />
      </Box>
      <Box component="main" className={styles.content}>
        {props.children}
      </Box>
    </Box>
  );
}
