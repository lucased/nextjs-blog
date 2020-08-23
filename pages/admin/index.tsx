import AddTerm from "../../components/Admin/AddTerm";
import TermTable from "../../components/Admin/TermTable";
import PageLayout from "../../components/PageLayout";

const Terms = () => {
  return (
    <PageLayout width={900}>
      <AddTerm />
      <TermTable />
    </PageLayout>
  );
};

export default Terms;
