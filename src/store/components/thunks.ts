import { ComponentsActionTypes } from "./types";
import actions from './actions';
import { getComponentsData } from '../../service/index';
import { data } from "../../data/data";

type Dispatch = (action: ComponentsActionTypes) => void;

export const getComponents = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const result = await getComponentsData() ?? data;
    dispatch(actions.setComponents(result));
  } catch (err) {
    console.log('getting components failed, error message', err);
  }
};

export default { getComponents };

