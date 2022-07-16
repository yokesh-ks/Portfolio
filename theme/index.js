import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonStyles";
import styles from "./styles";

// Foundational style overrides
import colors from "./foundations/colors";
import breakpoints from "./foundations/breakpoints";
import { fontStyle as textStyles } from "./foundations/fontStyles";

const overrides = {
  styles,
  colors,
  breakpoints,
  textStyles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
