import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";
import componentStyleOverrides from "./componentStyleOverrides";
import mixins from "./mixins";

// Create a theme instance.
let theme = createTheme({
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
      main: "#262626",
    },
    success: {
      main: "#24D480",
    },
    error: {
      main: "#f54307",
    },
    text: {
      primary: "#eee",
      secondary: "#262A2E",
    },
    divider: "#454D56",
    grey: {
      100: "rgba(255, 255, 255, 0.07)",
      600: "rgba(196, 196, 196, 0.15)",
      700: "rgba(22, 22, 22, 0.24)",
      800: "rgba(33, 29, 29, 0.88)",
      900: "rgba(38, 40, 42, 1)",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
  },

  shadows: [
    "none",
    "0px 4px 50px rgba(0, 0, 0, 0.25)",
    "0px 4px 4px rgba(31, 31, 31, 0.1)",
  ],
  shape: {
    borderRadius: 10,
  },
  spacing: [
    "5px",
    "10px",
    "15px",
    "20px",
    "24px",
    "25px",
    "30px",
    "40px",
    "60px",
  ],
  zIndex: { appBar: 1300, overlayUI: 100 },
});

theme = {
  ...theme,
  components: componentStyleOverrides,
  typography: {
    ...theme.typography,
    body1: {
      fontFamily: "Open Sans",
      fontSize: "1.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: "1.4rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
      },
    },
    small: {
      fontSize: "1.3rem",
      lineHeight: 1,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.4rem",
      },
    },
    h1: {
      fontFamily: "Roboto Mono",
      fontSize: "2.4rem",
      fontWeight: 400,
      wordSpacing: "-5px",
      [theme.breakpoints.up("md")]: {
        fontSize: "4.8rem",
      },
    },
    /*    h2: {
      fontFamily: "Open Sans",
      fontSize: "2.4rem",
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: "4.8rem",
      },
    }, */
    h2: {
      fontFamily: "Open Sans",
      fontSize: "2.4rem",
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: "4rem",
      },
    },
    h3: {
      fontFamily: "Open Sans",
      fontSize: "2rem",
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    },
    subtitle1: {
      fontSize: "2.4rem",
    },
    button: {
      fontWeight: 500,
      fontSize: "1.8rem",
    },
  },

  mixins,
};

export default theme;
