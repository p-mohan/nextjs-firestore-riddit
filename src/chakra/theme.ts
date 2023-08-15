// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "Open sans, sans-serif",
  },
  style: {
    global: () => ({
      bg: "gray.200",
    }),
  },
  components: {
    Button,
  },
});
