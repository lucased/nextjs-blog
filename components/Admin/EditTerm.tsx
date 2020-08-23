import { useRouter } from "next/router";
import { useMutation, queryCache, useQuery } from "react-query";
import { updateTerm, getTerm } from "../../lib/api";
import TermForm from "./TermForm";

const EditTerm = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isError, isLoading, error, data } = useQuery(["term", id], getTerm);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
