/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";

const Loading = () => {
  return (
    <Flex
      sx={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Box>Loading Dune terminolgy's ... wait please</Box>
    </Flex>
  );
};

export default Loading;
