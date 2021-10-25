import { RadioStationData } from "../types/interfaces";
import axios, { AxiosError, AxiosResponse } from 'axios';

export const getComponentsData = (): Promise<RadioStationData[] | undefined> => {
  const components = axios.get('your_url_for_data')
  .then((response: AxiosResponse) => {
    return response.data as RadioStationData[];
  })
  .catch((reason: AxiosError) => {
    if (reason.response?.status === 404) {
      console.log(reason.message)
      return undefined;
  }});
  return components;
};