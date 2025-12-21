import { createTheme } from "@mantine/core";

export const theme = createTheme({
  black: "#000000",
  white: "#ffffff",



  fontFamily: "Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",

  headings: {
    fontFamily: "Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "600",
  },

  components: {    
  Anchor: {
    defaultProps: {
      underline: "never",
      c: "inherit",
    },
  },

  NavLink: {
    defaultProps: {
      c: "inherit",
    },
  },
},

});
