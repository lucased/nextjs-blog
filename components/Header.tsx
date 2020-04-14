import { Heading } from "@chakra-ui/core";

const Header = ({ title }) => {
  return (
    <Heading as="h1" size="2xl" margin="2rem">
      {title}
    </Heading>
  );
};

export default Header;
