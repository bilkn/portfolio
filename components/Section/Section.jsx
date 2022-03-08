import { Box } from "@mui/material";
import React from "react";

function Section({ children }) {
  return <Box sx={{ px: 3, pt: { xs: "70px" } }}>{children}</Box>;
}

export default Section;
