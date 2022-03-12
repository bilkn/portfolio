import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import useHeaderLogic from "../../hooks/useHeaderLogic";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const { showMenu, handlers } = useHeaderLogic();
  const { zIndex } = useTheme();
  const { toggleMenu } = handlers;

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
      <MobileMenu showMenu={showMenu} />
    </>
  );
}

export default Header;
