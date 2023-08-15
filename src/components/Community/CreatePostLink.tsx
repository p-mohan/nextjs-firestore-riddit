import { authModalState } from "@/atoms/authmodalAtom";
import { auth } from "@/firebase/clientapp";
import useDirectory from "@/hooks/useDirectory";
import { Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useResetRecoilState, useSetRecoilState } from "recoil";

const CreatePostLink: React.FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const { toggleMenuOpen } = useDirectory();
  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }
    const { communityId } = router.query;
    if (communityId) {
      router.push(`/${communityId}/submit`);
      return;
    }
    toggleMenuOpen();
  };
  return (
    <Flex
      bg="white"
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor="gray.300"
      align="center"
      p={2}
    >
      <Input
        placeholder="Create Post ..."
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        bg="gray.50"
        h="36px"
        borderRadius={4}
        onClick={onClick}
      ></Input>
    </Flex>
  );
};
export default CreatePostLink;
