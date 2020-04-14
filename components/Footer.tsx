import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <NextLink href="/">
      <Link marginY={2}>
        <Text fontStyle="italic">Go back home</Text>
      </Link>
    </NextLink>
  );
};

export default Footer;
