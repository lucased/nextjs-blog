import { useRouter } from "next/router";
import { useMutation, queryCache } from "react-query";
import { updateTerm } from "../../lib/api";
import TermForm from "./TermForm";

const EditTerm = ({ data }) => {
  const router = useRouter();
  const [mutate, { status }] = useMutation(updateTerm, {
    onSuccess: () => {
      queryCache.invalidateQueries("terms");
      router.push("/admin");
    },
  });

  const onUpdateTerm = async (e, { name, description }) => {
    e.preventDefault();

    if (name && description) {
      try {
        await mutate({ id: data._id, data: { name, description } });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <TermForm
      onFormSubmit={onUpdateTerm}
      initName={data.name}
      initDescription={data.description}
      status={status}
    />
  );
};

export default EditTerm;
