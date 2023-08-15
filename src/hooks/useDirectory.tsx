import { communityState } from "@/atoms/communityAtom";
import {
  DirectoryMenuItem,
  directorymenuState,
} from "@/atoms/directoryMenuAtom";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directorymenuState);
  const communityStateValue = useRecoilValue(communityState);
  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };
  const router = useRouter();
  const onSelectMeuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));
    router.push(menuItem.link);
    if (directoryState.isOpen) {
      toggleMenuOpen();
    }
  };
  useEffect(() => {
    const { currentCommunity } = communityStateValue;
    if (currentCommunity) {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `${currentCommunity.id}`,
          link: `/${currentCommunity.id}}`,
          imageURL: currentCommunity.imageURL,
        },
      }));
    }
  }, [communityStateValue.currentCommunity]);
  return { directoryState, toggleMenuOpen, onSelectMeuItem };
};
export default useDirectory;
