export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      h: 8,
      minW: 8,
      fontSize: "sm",
      px: 3,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      bg: "primary",
      color: "black",
      borderRadius: "30px",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "600",
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "primary",
  },
};
