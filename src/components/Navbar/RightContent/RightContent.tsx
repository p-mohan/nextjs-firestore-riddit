import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import AuthButton from "./AuthButton";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientapp";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <Flex justify="center" align="center">
        {/* {user ? <Icons /> : <AuthButton />} */}
        {!user && <AuthButton />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
