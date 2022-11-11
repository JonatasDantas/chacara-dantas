export interface AppBarProps extends React.PropsWithChildren {
  navItems: NavItem[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export interface NavItem {
  name: string;
  url: string;
}
