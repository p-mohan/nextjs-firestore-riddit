import { authModalState } from "@/atoms/authmodalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import { useSetRecoilState } from "recoil";
import Communities from "./Communities";
import useDirectory from "@/hooks/useDirectory";
const UserMenu: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const { directoryState, toggleMenuOpen } = useDirectory();
  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0x 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        onClick={toggleMenuOpen}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius="full"
                boxSize="24px"
                mr={2}
              />
            ) : (
              <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            )}

            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={700}>
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>

          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
