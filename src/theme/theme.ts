import { PaletteMode, Theme, ThemeOptions, responsiveFontSizes } from "@mui/material";

export const themeConfig: ThemeOptions = {
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textAlign: "center",
                },
            },
        },
        MuiListItemText: {
            defaultProps: {
                slotProps: { primary: { sx: { textAlign: "initial" } } },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: [
            '"Montserrat"',
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
};

export const getPalette = (mode: PaletteMode) => ({
    palette: {
        mode,
        secondary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        ...(mode === "light"
            ? {
                  text: {
                      primary: "#27466b",
                  },
                  background: {
                      paper: "#eceff1",
                      icon: "#27466b",
                  },
              }
            : {
                  background: {
                      paper: "#101720",
                      default: "#101720",
                      icon: "rgba(255, 255, 255, 0.7)",
                  },
              }),
    },
});

export const getResponsiveFontSizes = (theme: Theme) => {
    const responsiveTheme = responsiveFontSizes(theme);

    responsiveTheme.typography.body1[theme.breakpoints.down("sm")] = {
        fontSize: "0.85rem",
    };

    return responsiveTheme;
};
