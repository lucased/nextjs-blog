/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";

const PageLayout = ({ children }) => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "600px",
          margin: 4
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
