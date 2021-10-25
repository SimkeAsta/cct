import { RadioStationData } from "../../types/interfaces";
import { ComponentsActionTypes, SET_COMPONENTS } from "./types";

export const setComponents = (components: RadioStationData[]): ComponentsActionTypes => ({
  type: SET_COMPONENTS,
  payload: { components },
});

export default { setComponents }