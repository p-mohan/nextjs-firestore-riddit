import React from "react";
import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Image
            src="/img/parrot_mono.svg"
            height="40px"
            borderRadius="50%"
            mr={2}
          />
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">Your personal frontpage, built for you.</Text>
          <Button height="30px">Create Post</Button>
          <Button variant="outline" height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
