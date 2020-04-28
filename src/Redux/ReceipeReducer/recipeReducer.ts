import { Recipe, recipeActionReturn } from "../types";
import * as Constants from "../../Constants";

export default function RecipeReducer(
  state: Recipe[] = [],
  action: recipeActionReturn
) {
  switch (action.type) {
    case Constants.ADD_RECIPE:
      return [...state, action.recipe];
    case Constants.MODIFY_RECIPE:
      const toModifyIndex = state.findIndex(u => u === action.recipe);
      return [
        ...state.slice(0, toModifyIndex),
        action.nextRecipe,
        ...state.slice(toModifyIndex + 1)
      ];
    case Constants.DELETE_RECIPE:
      const toDeleteIndex = state.findIndex(u => u === action.recipe);
      return [
        ...state.slice(0, toDeleteIndex),
        ...state.slice(toDeleteIndex + 1)
      ];
    default:
      return state;
  }
}
