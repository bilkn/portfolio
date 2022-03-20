import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

function HamburgerMenuButton(props) {
  const { open, ...rest } = props;

  return (
    <IconButton
      sx={{
        height: "60px",
        position: "relative",
        transitionDuration: "0.5s",
        width: "60px",
        "& .icon": {
          backgroundColor: "text.primary",
          height: "0",
          position: "absolute",
          top: "30px",
          transitionDuration: "0.5s",
          width: "60px",
          "&::before": {
            transitionDuration: "0.5s",
            position: "absolute",
            width: "20px",
            height: "2px",
            left: "30px",
            backgroundColor: "text.primary",
            content: "''",
            top: "-5px",
          },
          "&::after": {
            transitionDuration: "0.5s",
            position: "absolute",
            width: "20px",
            height: "2px",
            left: "30px",
            backgroundColor: "text.primary",
            content: "''",
            top: "5px",
          },
        },
      }}
      data-menu="3"
      {...rest}
    >
      <Box
        className="icon"
        sx={
          open
            ? {
                "&::before": {
                  transform:
                    "rotateZ(135deg) scaleX(1.25) translate(0, -5px)",
                },
                "&::after": {
                  transform:
                    "rotateZ(-135deg) scaleX(1.25) translate(2px, 7px)",
                },
              }
            : {}
        }
      />
    </IconButton>
  );
}

export default HamburgerMenuButton;
