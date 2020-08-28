/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";

const NoResult = () => {
  return (
    <Flex
      sx={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Box>We couldn't find a matching term</Box>
    </Flex>
  );
};

export default NoResult;
