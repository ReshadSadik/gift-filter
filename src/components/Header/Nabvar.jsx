import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import DrawerSmall from './DrawerSmall';
import DrawerLarge from './DrawerLarge';
import { useTheme } from '@mui/material/styles';
const drawerWidth = 240;
export const navItems = ['Home', 'About', 'Contact'];

function Nabvar(props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar for large screen */}
      <DrawerLarge handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav">
        {/* Navbar for small screen */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >

          {<DrawerSmall handleDrawerToggle={handleDrawerToggle} />}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Typography color={theme.palette.text.danger}>
          main content there
        </Typography>
      </Box>
    </Box>
  );
}

export default Nabvar;