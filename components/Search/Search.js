import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import algoliasearch from "algoliasearch/lite";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Loading from "./Loading";

const Search = () => {
  const client = algoliasearch(
    "WSTSIBZRH6",
    "5c7b1b40106b007e83f8a3b8f83e90f8"
  );
  const index = client.initIndex("prod_DUNE_TERMINOLOGY");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const search = async () => {
      const { hits } = await index.search(query, { hitsPerPage: 20, page });
      setResults([...results, ...hits]);
      setLoading(false);
    };
    search();
  }, [query, page]);

  const getMore = (loadMore) => {
    if (loadMore) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  return (
    <>
      <SearchInput setQuery={setQuery} />
      {loading ? (
        <Loading />
      ) : (
        <SearchResults results={results} getMore={getMore} />
      )}
    </>
  );
};

export default Search;
