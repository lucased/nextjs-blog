/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "next/link";
import { useQuery, useMutation, queryCache } from "react-query";
import { getTerms, deleteTerm } from "../../lib/api";
import Button from "../Elements/Button";
import { useModal } from "../Elements/Modal";

const ConfirmModal = ({ onClose, onConfirm, title }) => {
  return (
    <div
      sx={{
        padding: 4,
        maxWidth: 400,
        maxHeight: 400,
        backgroundColor: "background",
        border: (theme) => `1px solid ${theme.colors.secondary}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 sx={{ marginTop: 0 }}>{title}</h3>
      <div>
        <Button solid sx={{ width: "50%" }} onClick={onClose}>
          No
        </Button>
        <Button sx={{ width: "50%" }} onClick={onConfirm}>
          Yes
        </Button>
      </div>
    </div>
  );
};

const TermTable = () => {
  const { setModal, unSetModal } = useModal();
  const { isLoading, isError, data } = useQuery(
    ["terms", { limit: 0, page: 0 }],
    getTerms
  );

  const [mutate, { status }] = useMutation(deleteTerm, {
    onSuccess: () => {
      queryCache.invalidateQueries("terms");
      unSetModal();
    },
  });

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
                    onClick={() =>
                      setModal(
                        <ConfirmModal
                          title="Are you sure?"
                          onClose={unSetModal}
                          onConfirm={() => mutate(term._id)}
                        />
                      )
                    }
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
