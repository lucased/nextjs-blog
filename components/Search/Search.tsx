import React, { useState } from "react";
import { useQuery } from "react-query";
import debounce from "lodash/debounce";
/** @jsx jsx */
import { jsx } from "theme-ui";

import { getTerms } from "../../lib/api";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Loading from "./Loading";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const { isLoading, data } = useQuery(
    ["terms", { term: searchTerm, limit: 0, page: 0 }],
    getTerms
  );
  const debounceSetSearchTerm = debounce((value) => setSearchTerm(value), 400);

  return (
    <>
      <SearchInput setSearchTerm={debounceSetSearchTerm} />
      {isLoading ? (
        <Loading />
      ) : (
        <SearchResults data={data} />
      )}
    </>
  );
};

export default Search;
