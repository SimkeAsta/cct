import { RadioStationData } from "../../types/interfaces";

export const SET_COMPONENTS = '@COMPONENTS/SET_COMPONENTS';

export interface SetComponents {
  type: typeof SET_COMPONENTS;
  payload: {
    components: RadioStationData[];
  };
}

export type ComponentsActionTypes = SetComponents;