import { Flex, Box } from "@chakra-ui/core";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageLayout = ({ title, children }) => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center" margin={4}>
        <Header title={title} />
        <Navigation />
        {children}
        <Footer />
      </Flex>
    </Box>
  );
};

export default PageLayout;
