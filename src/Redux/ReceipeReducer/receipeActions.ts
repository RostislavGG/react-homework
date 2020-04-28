import * as Constants from "../../Constants";
import { Recipe, recipeActionReturn } from "../types";

export function addReceipe(recipe: Recipe): recipeActionReturn {
  return { type: Constants.ADD_RECIPE, recipe };
}

export function modifyRecipe(
  recipe: Recipe,
  nextRecipe: Recipe
): recipeActionReturn {
  return { type: Constants.MODIFY_RECIPE, recipe, nextRecipe };
}

export function deleteRecipe(recipe: Recipe): recipeActionReturn {
  return { type: Constants.DELETE_RECIPE, recipe };
}
