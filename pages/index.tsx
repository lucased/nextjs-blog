/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { NextSeo } from "next-seo";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import { Global } from "@emotion/core";

const IndexPage = () => {
  return (
    <PageLayout>
      <Global
        styles={{
          "@font-face": {
            fontFamily: "Orthodox Herbertarian, serif",
            src: "url('/fonts/OrthodoxHerbertarian.ttf') format('ttf')",
          },
          body: {
            backgroundImage: "url(/space.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            backgroundPosition: "top center",
            backgroundOrigin: "content-box",
          },
        }}
      />
      <NextSeo
        canonical="https://www.duneglossary.com"
        title="Dune Glossary of Terminology"
        description="Glossary of terminology from Dune the book"
      />
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
