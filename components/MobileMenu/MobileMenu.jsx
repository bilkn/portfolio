import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Button, Drawer, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

function MobileMenu(props) {
  const { showMenu } = props;

  const menuItems = [
    { name: "About", to: "#" },
    { name: "Skills", to: "#" },
    { name: "Projects", to: "#" },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, to: "https://www.linkedin.com/in/bilkankonus/" },
    { icon: <GitHub />, to: "https://github.com/bilkn" },
    { icon: <Mail />, to: "mailto:bilkan.konus@gmail.com" },
  ];

  return (
    <Drawer
      sx={{ backgroundColor: "grey.900" }}
      PaperProps={{ sx: { top: "80px", width: "100%" } }}
      open={showMenu}
      anchor="right"
    >
      <Stack
        sx={{
          alignItems: "flex-start",
          px: 3,
          pb: 5,
          pt: "80px",
          height: "calc(100% - 80px)",
        }}
      >
        <nav>
          <List>
            <Stack spacing={4}>
              {menuItems.map(({ name, to }) => (
                <ListItem sx={{ p: "0" }}>
                  <Link href={to} underline="none">
                    <Typography
                      variant="h2"
                      sx={{
                        color: "text.primary",
                        fontSize: "4.8rem",
                        fontFamily: "Roboto mono",
                      }}
                    >
                      {name}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </Stack>
          </List>
        </nav>
        <Button sx={{ mt: 6 }}>Contact</Button>
        <List sx={{ mt: "auto", py: "0" }}>
          <Stack direction={"row"} spacing={4}>
            {socialLinks.map(({ icon, to }) => (
              <ListItem sx={{ p: "0", width: "auto" }}>
                <Link href={to} sx={{ color: "text.primary" }} target="_blank">
                  {React.cloneElement(icon, { sx: { fontSize: "4rem" } })}
                </Link>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Stack>
    </Drawer>
  );
}

export default MobileMenu;
