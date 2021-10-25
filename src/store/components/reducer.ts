/* eslint-disable import/no-anonymous-default-export */
import { ComponentsState } from "../../types/interfaces";
import { ComponentsActionTypes, SET_COMPONENTS } from "./types";

export const initialState: ComponentsState = {
  components: undefined,
};

export default (
  state = initialState,
  action: ComponentsActionTypes,
): ComponentsState => {
  switch (action.type) {

    case SET_COMPONENTS: {
      const {
        payload: { components },
      } = action;

      return {
        ...state,
        components,
      };
    }

    default:
      return state;
  }
};

