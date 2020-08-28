import React from "react";
/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Result = ({ result }) => {
  return (
    <p
      sx={{
        fontSize: [2, 3],
        fontWeight: 100,
        color: "primary",
        letterSpacing: "1.5px",
      }}
    >
      <span
        sx={{
          display: "inline-block",
          // fontFamily: "heading",
          color: "secondary",
          fontSize: [3],
          fontWeight: 600,
        }}
      >
        {result.name}
      </span>{" "}
      - {result.description}
    </p>
  );
};

const SearchResults = ({ data }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "20px",
          background: (theme) =>
            `linear-gradient(rgba(29, 39, 74, 0.01), ${theme.colors.background})`,
        },
      }}
    >
      <Box
        mt={4}
        sx={{
          width: "100%",
          paddingRight: 2,
          maxHeight: [
            "calc(100vh - 330px)",
            "calc(100vh - 375px)",
            "calc(100vh - 440px)",
          ],
          overflowY: "scroll",
          scrollbarColor: (theme) =>
            `${theme.colors.secondary} ${theme.colors.background}`,
          "&::-webkit-scrollbar": {
            backgroundColor: (theme) => `${theme.colors.background}`,
          },
          "&::-webkit-scrollbar-thumb": {
            background: (theme) => `transparent`,
            borderRadius: (theme) => `${theme.radii.default}`,
            border: (theme) => `1px solid ${theme.colors.secondary}`,
            minHeight: "30px",
            "&:hover": {
              background: (theme) => `${theme.colors.secondary}`,
            },
          },

          "&::-webkit-scrollbar-track": {
            background: (theme) => `${theme.colors.background}`,
          },
        }}
      >
        {data.results.map((result) => {
          return <Result key={result._id} result={result} />;
        })}
      </Box>
    </Box>
  );
};

export default SearchResults;
