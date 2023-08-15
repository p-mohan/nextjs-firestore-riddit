import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDeveloperMode } from "react-icons/md";

const PrasanthM = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex mb={2}>
        <Icon
          as={MdDeveloperMode}
          fontSize={26}
          color="brand.100"
          mt={1}
          mr={2}
        />
        <Stack spacing={1}>
          <Text fontWeight={600}>About the Developer</Text>
          <Text fontSize="10pt">
            This web app is designed after a famous forum site as a portfolio
            app by Prasanth M, Upwork freelancer. This app is developed with
            Next.js using Firestore as the backend. You are welcome to try out
            the features!
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PrasanthM;
