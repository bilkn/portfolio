import { Box } from "@mui/material";
import React from "react";

function Section({ children, ...rest }) {
  return (
    <section {...rest}>
      <Box sx={{ px: { xs: 3, sm: "0" }, pt: { xs: "70px" } }}>{children}</Box>
    </section>
  );
}

export default Section;
