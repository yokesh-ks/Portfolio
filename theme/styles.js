import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "IBM Plex Sans",
      color: mode("#697a8d", "whiteAlpha.900")(props),
      bg: mode("#f5f5f9", "gray.800")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
  }),
};

export default styles;
