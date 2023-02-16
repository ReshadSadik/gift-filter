import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerSmall from "./DrawerSmall";
import DrawerLarge from "./DrawerLarge";
import { useTheme } from "@mui/material/styles";
const drawerWidth = 240;
export const navItems = ["Home", "About", "Contact"];

function Nabvar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar for large screen */}
      <DrawerLarge handleDrawerToggle={handleDrawerToggle} />
      {/* Navbar for small screen */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {<DrawerSmall handleDrawerToggle={handleDrawerToggle} />}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Nabvar;
