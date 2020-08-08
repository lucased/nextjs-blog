/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Search from "../components/Search/Search";

const IndexPage = () => {
  return (
    <PageLayout>
      <Flex
        sx={{
          justifyContent: "center",
        }}
      >
        <Box mt={4} sx={{ width: "100%" }}>
          <Header />
          <Search />
        </Box>
      </Flex>
    </PageLayout>
  );
};

export default IndexPage;
