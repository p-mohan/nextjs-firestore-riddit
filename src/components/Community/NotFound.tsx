import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="60vh">
      Community Does Not exist
      <Link href="/">
        <Button mt={4}>Go Home</Button>
      </Link>
    </Flex>
  );
};
export default NotFound;
