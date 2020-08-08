export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#FEDE9A",
    background: "#1D274A",
    primary: "#FEDE9A",
    secondary: "#D16F1A",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    body: '"Arial", sans-serif',
    heading: '"Orthodox Herbertarian", san-serif',
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    header: {
      title: {
        fontFamily: "heading",
        fontSize: ["80px", "100px", "140px"],
        color: "primary",
        padding: 0,
        margin: 0,
      },
      description: {
        fontFamily: "body",
        fontSize: ["20px", "27px", "41px"],
        margin: 0,
        textTransform: "uppercase",
        color: "secondary",
        letterSpacing: "6.5px",
      },
    },
    input: {
      width: "100%",
      padding: [2, 3],
      backgroundColor: "transparent",
      border: "none",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "secondary",
      borderBottomLeftRadius: "default",
      borderTopLeftRadius: "default",
      color: "primary",
      fontSize: 4,
      "::placeholder": {
        color: "primary",
      },
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
};
