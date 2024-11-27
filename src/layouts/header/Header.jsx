import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "About", "Products", " Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="flex h-16 bg-white w-full p-3 ">
      <div className=" md:hidden lg:hidden sm:block ">
        <Button onClick={toggleDrawer(true)}>
          <DensityMediumOutlinedIcon className="text-black hover:text-[#dc2e3a]" />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
