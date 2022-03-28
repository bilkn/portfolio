import { Typography } from "@mui/material";
import React from "react";

function ErrorMessage({ children }) {
  return <Typography color='error' variant='small'>{children}</Typography>;
}

export default ErrorMessage;
