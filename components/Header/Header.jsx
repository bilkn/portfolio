import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

function Header() {
  return (
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
        <Image src={"/logo.svg"} alt="Bilkan" width="118px" height={"26px"} />
        <IconButton>
          <img src="/icons/hamburger-icon.svg" alt="" />
        </IconButton>
      </Stack>
    </header>
  );
}

export default Header;
