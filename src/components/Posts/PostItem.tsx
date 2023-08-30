import { Post } from "@/atoms/postsAtom";
import {
  Flex,
  Icon,
  Stack,
  Text,
  Skeleton,
  Spinner,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import Image from "next/image";

import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
} from "react-icons/io5";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    post: Post,
    currentVoteValue: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
  homePage?: boolean;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [error, setError] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostPage = !onSelectPost;
  const router = useRouter();
  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    try {
      setLoadingDelete(true);
      const success = await onDeletePost(post);
      if (!success) {
        throw new Error("Failed to delete the post");
      }
      if (singlePostPage) {
        router.push(`/${post.communityId}`);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoadingDelete(false);
  };
  return (
    <Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostPage ? "white" : "gray.300"}
      borderRadius={singlePostPage ? "4px 0px 0px 0px" : "4px"}
      _hover={{ borderColor: singlePostPage ? "none" : "gray.500" }}
      onClick={() => onSelectPost && onSelectPost(post)}
    >
      <Flex
        direction="column"
        align="center"
        bg={singlePostPage ? "none" : "gray.100"}
        p={2}
        width="40px"
        cursor="pointer"
        borderRadius={singlePostPage ? "0px" : "3px 0px 0px 3px"}
      >
        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          fontSize={22}
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          onClick={(event) => onVote(event, post, 1, post.communityId)}
        />
        <Text fontSize="9pt">{post.voteStatus}</Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          fontSize={22}
          onClick={(event) => onVote(event, post, -1, post.communityId)}
          color={userVoteValue === -1 ? "#4379ff" : "gray.400"}
        />
      </Flex>
      <Flex direction="column" width="100%">
        {error && (
          <Alert status="error">
            <AlertIcon />
            <Text mr={2}>{error}</Text>
          </Alert>
        )}
        <Stack
          spacing={1}
          p="10px"
          cursor={singlePostPage ? "unset" : "pointer"}
        >
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            {homePage && (
              <>
                {post.communityImageURL ? (
                  <Image
                    src={post.communityImageURL}
                    height={25}
                    width={25}
                    alt={post.communityId}
                    style={{
                      borderRadius: "50%",
                      marginRight: ".5em",
                      height: 25,
                      width: 25,
                    }}
                  />
                ) : (
                  <Image
                    src="/img/parrot_mono.svg"
                    height={25}
                    width={25}
                    alt={post.communityId}
                    style={{ marginRight: ".5em" }}
                  />
                )}
                <Link href={`/${post.communityId}`}>
                  <Text
                    fontWeight={700}
                    _hover={{ textDecoration: " underline" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {post.communityId}
                  </Text>
                </Link>
                <Icon as={BsDot} color="gray.500" fontSize={8} />
              </>
            )}
            <Text>
              Posted by {post.creatorDisplayName}{" "}
              {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}
            </Text>
          </Stack>
          <Text fontSize="12pt" fontWeight={600}>
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justify="center" align="center" p={2}>
              {loadingImage && <Skeleton h="200px" w="100%" borderRadius={4} />}
              <Flex maxHeight="460px">
                <Image
                  src={post.imageURL}
                  alt="Post Image"
                  onLoad={() => setLoadingImage(false)}
                  height={400}
                  width={460}
                  placeholder="empty"
                />
              </Flex>
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.numberOfComments}</Text>
          </Flex>
          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostItem;
