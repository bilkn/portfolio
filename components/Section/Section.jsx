import { Box } from "@mui/material";
import React from "react";

function Section({ children, ...rest }) {
  return (
    <section {...rest}>
      <Box sx={{ px: 3, pt: { xs: "70px" } }}>{children}</Box>
    </section>
  );
}

export default Section;
