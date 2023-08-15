import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

type PostLoaderProps = {};

const PostLoader: React.FC<PostLoaderProps> = () => {
  return (
    <Stack spacing={6}>
      <Box padding="10px 10px" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={1} width="40%" />
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
        <Skeleton mt={4} h="200px" />
      </Box>
      <Box padding="10px 10px" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={1} width="40%" />
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
        <Skeleton mt={4} h="200px" />
      </Box>
    </Stack>
  );
};
export default PostLoader;
