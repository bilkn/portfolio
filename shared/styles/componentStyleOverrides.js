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
      },
    },
  },
});

export default componentStyleOverrides;
