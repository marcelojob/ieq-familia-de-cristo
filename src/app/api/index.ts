import axios from "axios"; "axios"
import { cellProps } from "./models"

export const findCells = () => {
  return axios.get<cellProps[]>('https://demo0379105.mockable.io/api/v1/cells');
};