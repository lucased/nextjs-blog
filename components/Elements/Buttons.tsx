/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      sx={{
        maxWidth: 100,
        padding: 1,
        backgroundColor: "transparent",
        color: "primary",
        border: (theme) => `1px solid ${theme.colors.secondary}`,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "secondary",
          color: "background",
        },
      }}
    >
      {children}
    </button>
  );
};

export default Button;
