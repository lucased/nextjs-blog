import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/core";

const Navigation = () => {
  return (
    <Flex flexDirection="row" justify="space-between" width="150px" marginBottom={4}>
      <NextLink href="/">
        <Link>Home</Link>
      </NextLink>
      <NextLink href="/blog">
        <Link>Blog</Link>
      </NextLink>
      <NextLink href="/about">
        <Link>About</Link>
      </NextLink>
    </Flex>
  );
};

export default Navigation;
