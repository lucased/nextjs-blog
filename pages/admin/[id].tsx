import { useRouter } from "next/router";
import { useQuery } from "react-query";
import EditTerm from "../../components/Admin/EditTerm";
import PageLayout from "../../components/PageLayout";
import Authenticated from "../../components/Auth/Authenticated";

const EditTermContainer = () => {
  return (
    // <Authenticated>
      <PageLayout width={900}>
        <EditTerm />
      </PageLayout>
    // </Authenticated>
  );
};

export default EditTermContainer;
