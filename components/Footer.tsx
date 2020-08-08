import NextLink from "next/link";
/** @jsx jsx */
import { Link, Text, jsx } from "theme-ui";

const Footer = () => {
  return (
    <NextLink href="/">
      <Link
        sx={{
          margin: 2,
        }}
      >
        Go back home
      </Link>
    </NextLink>
  );
};

export default Footer;
