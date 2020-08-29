/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import SearchIcon from "./SearchIcon";

const SearchInput = ({ setSearchTerm }) => {
  return (
    <div sx={{ mt: 4 }}>
      <label sx={{ color: "background" }} htmlFor="term-search">
        Seatch for a term
      </label>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          id="term-search"
          sx={{
            variant: "styles.input",
          }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
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
    </div>
  );
};

export default SearchInput;
