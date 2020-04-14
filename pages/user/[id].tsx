import { useRouter } from "next/router";
import NextLink from "next/link";
import { SimpleGrid, Text, Flex, Heading, Alert, Link } from "@chakra-ui/core";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Bad request!!");
  }

  const data: { id: string; name: string; email: string } = await res.json();
  return data;
};

const UserData = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  if (error) {
    return <Alert status="error">Loading Failed: {error.message}</Alert>;
  }

  if (!data) {
    return <Alert status="info">Loading ....</Alert>;
  }

  return (
    <SimpleGrid columns={2} width="2xs" spacingY={4}>
      <Text fontWeight="bold" marginRight={4}>
        UserID
      </Text>
      <Text>{data.id}</Text>
      <Text fontWeight="bold" marginRight={4}>
        Name
      </Text>
      <Text>{data.name}</Text>
      <Text fontWeight="bold" marginRight={4}>
        Email
      </Text>
      <Text>{data.email}</Text>
    </SimpleGrid>
  );
};

const User = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" margin="2rem">
        User
      </Heading>
      <UserData />
      <NextLink href="/">
        <Link marginY={2}>
          <Text fontStyle="italic">Go back home</Text>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default User;
