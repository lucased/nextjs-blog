/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "next/link";
import { useQuery } from "react-query";
import { getTerms } from "../../lib/api";
import Button from "../Elements/Buttons";

const TermTable = () => {
  const {
    isLoading,
    isError,
    data,
  } = useQuery(["terms", { limit: 0, page: 0 }], getTerms);
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error loading terms</div>;
  return (
    <div>
      <table
        sx={{
          borderCollapse: "collapse",
          "td, tr, th": {
            border: (theme) => `1px solid ${theme.colors.secondary}`,
            padding: 2,
          },
        }}
      >
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((term) => {
            return (
              <tr key={term._id}>
                <td>{term.name}</td>
                <td>{term.description}</td>
                <td sx={{ minWidth: 100, height: "100%", textAlign: "center" }}>
                  <Link href="/admin/[id]" as={`/admin/${term._id}`}>
                    <a>
                      <Button>Edit</Button>
                    </a>
                  </Link>
                  <Button
                    sx={{
                      borderLeft: "none",
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TermTable;
