import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import useHeaderLogic from "./useHeaderLogic";
import { MobileMenu } from "..";
import { HamburgerMenuButton } from "./components";

function Header() {
  const { showMenu, handlers } = useHeaderLogic();
  const { zIndex } = useTheme();
  const { toggleMenu } = handlers;

  const sectionLinks = [
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Skills",
      to: "#skills",
    },
    {
      name: "Projects",
      to: "#projects",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          position: "sticky",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: zIndex.appBar,
        }}
      >
        <header>
          <Container>
            <Box
              sx={{
                alignItems: "center",
                display: { xs: "flex", md: "none" },
                minHeight: "80px",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <a href="http://localhost:3000">
                <Image
                  src={"/logo.svg"}
                  alt="Bilkan"
                  width="118px"
                  height={"26px"}
                />
              </a>
              <HamburgerMenuButton open={showMenu} onClick={toggleMenu} />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                display: { xs: "none", md: "flex" },
                minHeight: "90px",
                px: { xs: 3, md: "0" },
              }}
            >
              <a href="http://localhost:3000">
                <Image
                  src={"/logo.svg"}
                  alt="Bilkan"
                  width="180px"
                  height={"26px"}
                />
              </a>
              <nav>
                <Stack component={List} direction="row" spacing={8}>
                  {sectionLinks.map(({ name, to }) => (
                    <ListItem key={name}>
                      <Link
                        sx={{
                          color: "white",
                          textDecoration: "none",
                          transition: "color 150ms",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        href={to}
                      >
                        <Typography>{name}</Typography>
                      </Link>
                    </ListItem>
                  ))}
                </Stack>
              </nav>
              <Button href="#contact" component={Link}>
                Contact
              </Button>
            </Box>
          </Container>
        </header>
      </Box>
      <MobileMenu showMenu={showMenu} onItemClick={toggleMenu} />
    </>
  );
}

export default Header;
