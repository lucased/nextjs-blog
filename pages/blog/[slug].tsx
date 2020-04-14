import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Text, Flex } from "@chakra-ui/core";
import PageLayout from "../../components/PageLayout";

const Slug = ({ title, text }) => {
  return (
    <PageLayout title={title}>
      <Flex margin={4} flexDirection="column">
        <Text>{text}</Text>
      </Flex>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../lib/blog.json")).default;
  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogs = (await import("../../lib/blog.json")).default;
  const blog = blogs.find((blog) => blog.slug === slug);

  return {
    props: {
      title: blog.title,
      text: blog.text,
    },
  };
};

export default Slug;
