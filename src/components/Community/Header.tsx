import { Community } from "@/atoms/communityAtom";
import useCommunityData from "@/hooks/useCommunityData";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();

  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );
  return (
    <Flex direction="column" w="100%" h="135px">
      <Box h="60%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex w="95%" maxWidth="860px">
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              src={communityStateValue.currentCommunity.imageURL}
              boxSize="66px"
              position="relative"
              top={-3}
              border="4px solid white"
              borderRadius="50%"
            />
          ) : (
            <Image
              src="/img/parrot_mono.svg"
              height="50px"
              position="relative"
              top={-3}
              border="4px solid white"
              borderRadius="50%"
            />
          )}
          <Flex>
            <Flex direction="column" mr={3} padding="15px 16px">
              <Text fontWeight={800} fontSize="16pt">
                {communityData.id}
              </Text>
            </Flex>
            <Flex direction="column" mr={6} pt="10px">
              <Button
                variant={isJoined ? "outline" : "solid"}
                onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
                isLoading={loading}
              >
                {isJoined ? "Joined" : "Join"}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
