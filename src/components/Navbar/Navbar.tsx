import React from "react";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import AuthModal from "../Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientapp";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import useDirectory from "@/hooks/useDirectory";
import { defaultMenuItem } from "@/atoms/directoryMenuAtom";
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMeuItem } = useDirectory();

  return (
    <Flex bg="white" h="44px" p="6px 12px" justify={{ md: "left" }}>
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: "0", md: "2" }}
        onClick={() => onSelectMeuItem(defaultMenuItem)}
      >
        <Image src="/img/parrot.svg" height="30px" />
        <Image
          src="/img/riddit.svg"
          h="16px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Directory />
      <AuthModal />
      {/* <SearchInput user={user} /> */}
      <Spacer />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
