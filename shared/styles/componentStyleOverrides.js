import { createStyles } from "@mui/styles";
import theme from "./theme";

const componentStyleOverrides = createStyles({
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: "#D72323",
        color: "#fff",
        minWidth: "185px",
        padding: "9px 25px",
        ":hover": {
          backgroundColor: "rgba(215, 35, 35, 0.7)",
        },
      },
      secondary: {
        backgroundColor: "hsla(0, 0%, 52%, 0.6)",

        "&:hover": {
          backgroundColor: "hsla(0, 0%, 52%, 0.8)",
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        paddingBottom: "0",
        paddingTop: "0",
      },
    },
  },
});

export default componentStyleOverrides;
