import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: any[];
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex w="95%" justify="center" maxWidth="860px">
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0]}
        </Flex>
        <Flex
          flexDirection="column"
          display={{ base: "none", md: "flex" }}
          width={{ md: "35%" }}
        >
          {children && children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
