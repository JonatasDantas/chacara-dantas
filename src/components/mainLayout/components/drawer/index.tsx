import { AppBarProps } from '@/types';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export function AppDrawer(props: AppBarProps) {
  return (
    <Drawer
      variant="temporary"
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
        },
      }}
    >
      <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
        <List>
          {props.navItems.map((item) => (
            // <>
            <ListItem key={item.url} sx={{ p: 0.5 }}>
              <ListItemButton key={item.url} sx={{ textAlign: 'center' }}>
                <ListItemText
                  key={item.url}
                  primary={item.name}
                  onClick={() => props.handlePageRedirect(item.url)}
                />
              </ListItemButton>
            </ListItem>
            // <Divider />
            // </>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
