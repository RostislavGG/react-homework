import { User, userActionReturn } from "../types";
import * as Constants from "../../Constants";

export default function userReducer(
  state: User[] = [],
  action: userActionReturn
) {
  switch (action.type) {
    case Constants.ADD_USER:
      return [...state, action.user];
    case Constants.MODIFY_USER:
      const toModifyIndex = state.findIndex(u => u === action.user);
      return [
        ...state.slice(0, toModifyIndex),
        action.nextUser,
        ...state.slice(toModifyIndex + 1)
      ];
    case Constants.DELETE_USER:
      const toDeleteIndex = state.findIndex(u => u === action.user);
      return [
        ...state.slice(0, toDeleteIndex),
        ...state.slice(toDeleteIndex + 1)
      ];
    default:
      return state;
  }
}
