import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  loading,
}) => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        value={textInputs.title}
        onChange={onChange}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        _focus={{ border: "1px solid", borderColor: "black" }}
      />
      <Textarea
        name="body"
        fontSize="10pt"
        value={textInputs.body}
        onChange={onChange}
        borderRadius={4}
        placeholder="Text (Optional)"
        height="100px"
        _focus={{ border: "1px solid", borderColor: "black" }}
      />
      <Flex justify="flex-end">
        <Button
          h="34px"
          padding="0px 30px"
          isLoading={loading}
          isDisabled={!textInputs.title}
          onClick={handleCreatePost}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
