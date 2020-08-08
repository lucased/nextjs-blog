/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import SearchIcon from "./SearchIcon";

const SearchInput = ({ setQuery }) => {
  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <input
        sx={{
          variant: "styles.input",
        }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: [3, 4],
          paddingY: [2, 3],
          backgroundColor: "secondary",
          borderTopRightRadius: "lg",
          borderBottomRightRadius: "lg",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default SearchInput;
