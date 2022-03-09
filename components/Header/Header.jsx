import { useTheme } from "@emotion/react";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import useHeaderLogic from "../../hooks/useHeaderLogic";
import LinkedInIcon from "../icons/LinkedInIcon";

function Header() {
  const { showMenu, handlers } = useHeaderLogic();
  const { zIndex } = useTheme();
  const { toggleMenu } = handlers;
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
    <>
      <Box sx={{ position: "relative", zIndex: zIndex.appBar }}>
        <header>
          <Stack
            sx={{
              backgroundColor: "secondary.main",
              flexDirection: "row",
              justifyContent: "space-between",
              minHeight: "80px",
              px: 2,
            }}
          >
            <Image
              src={"/logo.svg"}
              alt="Bilkan"
              width="118px"
              height={"26px"}
            />
            <IconButton onClick={toggleMenu}>
              <img src="/icons/hamburger-icon.svg" alt="" />
            </IconButton>
          </Stack>
        </header>
      </Box>
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
                  <Link
                    href={to}
                    sx={{ color: "text.primary" }}
                    target="_blank"
                  >
                    {React.cloneElement(icon, { sx: { fontSize: "4rem" } })}
                  </Link>
                </ListItem>
              ))}
            </Stack>
          </List>
        </Stack>
      </Drawer>
    </>
  );
}

export default Header;
