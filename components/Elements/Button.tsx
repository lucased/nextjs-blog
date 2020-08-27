/** @jsx jsx */
import { jsx, Spinner } from "theme-ui";

const Button = ({ children, isLoading = false, solid = false, ...props }) => {
  return (
    <button
      {...props}
      sx={{
        maxWidth: 100,
        padding: 1,
        backgroundColor: solid ? "secondary" : "transparent",
        color: solid ? "background" : "primary",
        border: (theme) => `1px solid ${theme.colors.secondary}`,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: solid ? "background" : "secondary",
          color: solid ? "primary" : "background",
        },
      }}
    >
      {isLoading ? <Spinner size={12}/> : children}
    </button>
  );
};

export default Button;
