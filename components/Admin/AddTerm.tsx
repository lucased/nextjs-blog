/** @jsx jsx */
import { jsx } from "theme-ui";
import { useMutation, queryCache } from "react-query";
import { createTerm } from "../../lib/api";
import TermForm from "./TermForm";

const AddTerm = () => {
  const [mutate, { status }] = useMutation(createTerm, {
    onSuccess: () => {
      queryCache.invalidateQueries("terms");
    },
  });

  const onCreateTerm = async (e, { name, description }) => {
    e.preventDefault();

    if (name && description) {
      try {
        await mutate({ name, description });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return <TermForm onFormSubmit={onCreateTerm} status={status} />;
};

export default AddTerm;
