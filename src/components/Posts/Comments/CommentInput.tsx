import AuthButton from "@/components/Navbar/RightContent/AuthButton";
import { Flex, Text, Textarea, Button } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type CommentInputProps = {
  commentText: string;
  setCommentText: (value: string) => void;
  user: User;
  createLoading: boolean;
  onCreateComment: (commentText: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  commentText,
  setCommentText,
  user,
  createLoading,
  onCreateComment,
}) => {
  return (
    <Flex direction="column" position="relative">
      {user ? (
        <>
          <Text mb={1}>Comment as {user.email?.split("@")[0]}</Text>
          <Textarea
            value={commentText}
            onChange={(event) => {
              setCommentText(event.target.value);
            }}
            placeholder="Speak your mind"
            fontSize="10pt"
            borderRadius={4}
            minHeight="160px"
            pb={10}
            _placeholder={{ color: "gray.500" }}
            _focus={{ outline: "none", bg: "white", border: "1px solid black" }}
          />
          <Flex
            justify="flex-end"
            bg="gray.100"
            p="6px 8px"
            borderRadius="0px 0px 4px 4px"
          >
            <Button
              h="26px"
              disabled={!commentText.length}
              isLoading={createLoading}
              onClick={() => onCreateComment(commentText)}
            >
              Comment
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          align="center"
          justify="space-between"
          p={4}
          border="1px solid"
          borderColor="gray.100"
        >
          <Text fontWeight={600}>Login or sign up to leave a comment</Text>
          <AuthButton />
        </Flex>
      )}
    </Flex>
  );
};
export default CommentInput;
