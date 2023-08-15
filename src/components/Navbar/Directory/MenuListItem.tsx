import useDirectory from "@/hooks/useDirectory";
import { Flex, MenuItem, Image, Text } from "@chakra-ui/react";
import React from "react";

type MenuListItemProps = {
  displayText: string;
  link: string;
  imageURL: string | undefined;
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  link,
  imageURL,
}) => {
  const { onSelectMeuItem } = useDirectory();
  return (
    <MenuItem
      w="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() => onSelectMeuItem({ displayText, link, imageURL })}
    >
      <Flex verticalAlign="center">
        {imageURL ? (
          <Image src={imageURL} borderRadius="full" boxSize="18px" />
        ) : (
          <Image src="/img/parrot_mono.svg" height="18px" />
        )}
        <Text ml={2}>{displayText}</Text>
      </Flex>
    </MenuItem>
  );
};
export default MenuListItem;
