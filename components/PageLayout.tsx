/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";

const PageLayout = ({ children, width = 600 }) => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        // height: '100vh'
      }}
    >
      <Box
        sx={{
          width,
          margin: 4
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
