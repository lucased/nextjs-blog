import { GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/core";
import PageLayout from "../../components/PageLayout";

const Blog: NextPage<{
  blogs: {
    slug: string;
    title: string;
    text: string;
  }[];
}> = (props) => {
  return (
    <PageLayout title="Blog">
      <Box>
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h2" size="md" marginY="1rem">Table Of Contents</Heading>
          {props.blogs.map((blog) => {
            return (
              <NextLink
                as={`/blog/${blog.slug}`}
                href={`/blog/[slug]`}
                passHref
                key={`/blog/${blog.slug}`}
              >
                <Link color="teal.500" marginY={1}>
                  <Text>
                    {blog.title}
                  </Text>
                </Link>
              </NextLink>
            );
          })}
        </Flex>
      </Box>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import("../../lib/blog.json")).default;
  return {
    props: { blogs },
  };
};

export default Blog;
