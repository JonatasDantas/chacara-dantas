export interface AppBarProps extends React.PropsWithChildren {
  navItems: NavItem[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  handlePageRedirect: (href: string) => void;
}

export interface NavItem {
  name: string;
  url: string;
}
