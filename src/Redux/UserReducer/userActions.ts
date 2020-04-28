import { User, userActionReturn } from "../types";
import * as Constants from "../../Constants";

export function addUser(user: User): userActionReturn {
  return { type: Constants.ADD_USER, user };
}

export function modifyUser(user: User, nextUser: User): userActionReturn {
  return { type: Constants.MODIFY_USER, user, nextUser };
}

export function deleteUser(user: User): userActionReturn {
  return { type: Constants.DELETE_USER, user };
}
