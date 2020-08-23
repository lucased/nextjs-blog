/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";

import AddTerm from "../../components/Admin/AddTerm";
import TermTable from "../../components/Admin/TermTable";
import PageLayout from "../../components/PageLayout";
import Authenticated from "../../components/Auth/Authenticated";

const Terms = () => {
  return (
    <Authenticated>
      <PageLayout width={900}>
        <AddTerm />
        <TermTable />
      </PageLayout>
    </Authenticated>
  );
};

export default Terms;
