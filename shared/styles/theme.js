import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default:
        "linear-gradient(66.18deg, rgba(21, 21, 21, 0.81) 22.82%, #2E3843 56.78%, rgba(0, 0, 0, 0.89) 107.26%, rgba(48, 56, 65, 0) 107.27%)",
      paper: "#2F2F2F",
    },

    primary: {
      main: "#D72323",
    },
    secondary: {
      main: "rgba(38, 38, 38, 0.7);",
    },
    success: {
      main: "#24D480",
    },
    error: {
      main: "#C84800",
    },
    text: {
      primary: "#eee",
      secondary: "#262A2E",
    },
    divider: "#454D56",
    grey: {
      100: "rgba(255, 255, 255, 0.3)",
      500: "rgba(196, 196, 196, 0.15)",
      800: "rgba(22, 22, 22, 0.24)",
      900: "rgba(33, 29, 29, 0.88)",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    body1: {
      fontFamily: "Open Sans",
      fontSize: "2.4rem",
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: "1.4rem",
    },
    h1: {
      fontFamily: "Roboto Mono",
      fontSize: "4.8rem",
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: "3.6rem",
    },
    subtitle1: {
      fontSize: "2.4rem",
    },
    button: {
      fontWeight: 600,
      fontSize: "1.8rem",
    },
  },
  shadows: [
    "none",
    "0px 4px 50px rgba(0, 0, 0, 0.25)",
    "0px 4px 4px rgba(31, 31, 31, 0.1)",
  ],
  spacing: ["5px", "15px", "20px", "25px", "30px", "40px", "60px"],
});

export default theme;
