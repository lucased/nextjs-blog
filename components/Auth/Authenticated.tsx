/** @jsx jsx */
import { jsx } from "theme-ui";

import { signIn, signOut, useSession } from "next-auth/client";
import PageLayout from "../../components/PageLayout";
import Button from "../Elements/Button";

const Wrapper = ({ children }) => {
  return (
    <PageLayout width={900}>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </PageLayout>
  );
};

const Authenticated = ({ children }) => {
  const [session, loading] = useSession();
  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }
  if (!session) {
    return (
      <Wrapper>
        <p>Not signed in</p>
        <Button onClick={signIn}>Sign in</Button>
      </Wrapper>
    );
  }
  if (session) {
    return (
      <div>
        <Button
          sx={{ position: "absolute", right: 1, top: 1 }}
          onClick={signOut}
        >
          Logout
        </Button>
        {children}
      </div>
    );
  }
};

export default Authenticated;
