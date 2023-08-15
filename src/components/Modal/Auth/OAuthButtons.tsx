import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientapp";
import { User } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);
  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };
  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);
  return (
    <Flex dir="column" align="center" justifyContent="center" w="100%">
      <Button
        variant="oauth"
        width="100%"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/img/googlelogo.png" h="20px" pr="4px" /> Continue with
        Google
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
