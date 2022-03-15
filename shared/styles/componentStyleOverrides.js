import { createStyles } from "@mui/styles";

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
  MuiInput: {
    styleOverrides: {
      root: {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderRadius: "10px",
        fontSize: "1.4rem",
        overflow: "hidden",
        marginTop: "0",
        "&.Mui-focused": {
          border: "1px solid",
          borderColor: "#24D480",
        },
        "&::before, &::after": {
          display: "none",
        },
        "& .MuiInput-input": {
          padding: "14px 22px",
        },
        "&&": {
          marginTop: "5px",
        },
      },
    },
  },
});

export default componentStyleOverrides;
