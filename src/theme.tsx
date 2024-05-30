import { createTheme, responsiveFontSizes, type LinkProps } from "@mui/material";

import { LinkBehavior } from "./components/ui";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#16a34a",
        light: "#22c55e",
        dark: "#15803d",
        contrastText: "#ffffff",
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: [
      "none",
      "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    ],
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiPaper: {
        defaultProps: {
          elevation: 2,
        },
      },
    },
  })
);
