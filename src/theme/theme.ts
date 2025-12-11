import Box from '@mui/material/Box';
Box;

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
    secondary: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#008080"
    },
    secondary: {
      main: "#FFC107"
    },
    background: {
      default: "#f7f9fb"
    }
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 250ms ease, box-shadow 250ms ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow:
              "0px 10px 20px rgba(2,6,23,0.08), 0px 6px 8px rgba(2,6,23,0.06)"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "transform 180ms ease, box-shadow 180ms ease"
        }
      }
    }
  }
});
