import axios from "axios"; "axios"
import { cellProps, ScheduleProps } from "./models"

export const findCells = () => {
  return axios.get<cellProps[]>("https://demo0379105.mockable.io/api/v1/cells");
}

export const findSchedule = () => {
  return axios.get<ScheduleProps>("https://demo0379105.mockable.io/api/v1/schedule");
}