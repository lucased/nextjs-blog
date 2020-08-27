/** @jsx jsx */
import { jsx } from "theme-ui";
import { useMutation, queryCache } from "react-query";
import { deleteTerm } from "../../lib/api";
import Button from "../Elements/Button";
import { useModal } from "../Elements/Modal";
import { useEffect } from "react";

const ConfirmModal = ({ onClose, onConfirm, title, isLoading }) => {
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
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
        <Button sx={{ width: "50%" }} isLoading={isLoading} onClick={onConfirm}>
          Yes
        </Button>
      </div>
    </div>
  );
};

const DeleteTerm = ({ id }) => {
  const { setModal, unSetModal } = useModal();
  const [mutate, { isLoading, status }] = useMutation(deleteTerm, {
    onSuccess: () => {
      queryCache.invalidateQueries("terms");
      unSetModal();
    },
  });

  return (
    <Button
      onClick={() =>
        setModal(
          <ConfirmModal
            title="Are you sure?"
            onClose={unSetModal}
            onConfirm={() => mutate(id)}
            isLoading={isLoading}
          />
        )
      }
      sx={{
        borderLeft: "none",
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteTerm;
