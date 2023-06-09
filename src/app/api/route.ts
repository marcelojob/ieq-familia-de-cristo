import axios from "axios"; "axios"
import { cellProps } from "./models"

export const findCells = async () => {
  return await axios.get<cellProps[]>('https://demo0379105.mockable.io/api/v1/cells');
};