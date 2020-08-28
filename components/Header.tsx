/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

const Header = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          variant: "styles.header.title",
        }}
      >
        DUNE
      </div>
      <p
        sx={{
          variant: "styles.header.description",
          textAlign: "center",
        }}
      >
        Terminology of the Imperium
      </p>
    </Flex>
  );
};

export default Header;
