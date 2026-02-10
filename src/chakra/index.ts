import { createSystem, defaultConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});
