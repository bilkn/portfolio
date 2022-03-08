import { useTheme } from "@emotion/react";
import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  const { palette } = useTheme();
  return createStyles({
    "@global": {
      html: {
        background: palette.background.default,
        fontSize: "62.5%",
      },
    },
  });
});

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
