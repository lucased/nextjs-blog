import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getTerm } from "../../lib/api";
import EditTerm from "../../components/Admin/EditTerm";
import PageLayout from "../../components/PageLayout";

const EditTermContainer = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isError, isLoading, error, data } = useQuery(["term", id], getTerm);

  return (
    <PageLayout width={900}>
      {isLoading ? <div>Loading...</div> : <EditTerm data={data} />}
    </PageLayout>
  );
};

export default EditTermContainer;
