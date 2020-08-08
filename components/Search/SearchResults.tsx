/** @jsx jsx */
import React, { useRef, useEffect } from "react";
import { jsx, Box, Flex } from "theme-ui";
import useInfiniteScroll from "../useInfiniteScroll";

const Result = ({ result }) => {
  return (
    <p
      sx={{
        fontSize: [2, 3],
        fontWeight: 100,
        color: "#DEC185",
        letterSpacing: "1.5px",
      }}
    >
      <span
        sx={{
          display: "inline-block",
          fontFamily: "heading",
          color: "primary",
          fontWeight: 4,
        }}
      >
        {result.name}
      </span>{" "}
      - {result.description}
    </p>
  );
};

const SearchResults = ({ results, getMore }) => {
  const ref = useRef(null);
  const [loadMore, setLoadMore] = useInfiniteScroll(ref);

  useEffect(() => {
    console.log('load more')
    getMore(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  return (
    <Box
      sx={{
        position: "relative",
        "::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "60px",
          background: (theme) =>
            `linear-gradient(rgba(29, 39, 74, 0.01), ${theme.colors.background})`,
        },
      }}
    >
      <Box
        ref={ref}
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
        {results.map((result) => {
          return <Result key={result.objectID} result={result} />;
        })}
      </Box>
    </Box>
  );
};

export default SearchResults;
