import { useTheme } from "@emotion/react";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import {
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { socialLinks } from "../../../fixtures/socialLinks";

function MobileMenu(props) {
  const { showMenu, onItemClick } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const menuItems = [
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
  ];

  useEffect(() => {
    if (matches) {
      onItemClick();
    }
  }, []);

  return (
    <Drawer
      sx={{ backgroundColor: "grey.900", display: { md: "none" } }}
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
            <Stack spacing={5}>
              {menuItems.map(({ name, to }) => (
                <ListItem key={name} sx={{ p: "0" }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "text.primary",
                      fontSize: "4.8rem",
                      fontFamily: "Roboto mono",
                    }}
                  >
                    <Link
                      href={to}
                      onClick={onItemClick}
                      sx={{
                        color: "inherit",
                        transition: "color 150ms",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                      underline="none"
                    >
                      {name}
                    </Link>
                  </Typography>
                </ListItem>
              ))}
            </Stack>
          </List>
        </nav>
        <Button
          href="#contact"
          onClick={onItemClick}
          sx={{ mt: 6 }}
          component={Link}
        >
          Contact
        </Button>
        <List sx={{ mt: "auto", py: "0" }}>
          <Stack direction={"row"} spacing={5}>
            {socialLinks.map(({ icon, to }) => (
              <ListItem key={to} sx={{ p: "0", width: "auto" }}>
                <Link
                  href={to}
                  sx={{
                    color: "text.primary",
                    transition: "color 150ms",
                    "&:hover": {
                      color: "#eeeeee8f",
                    },
                  }}
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
  );
}

export default MobileMenu;
