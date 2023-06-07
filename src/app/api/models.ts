import { ROLE, WEEK_DAY } from './enums';

export interface cellProps {
  id: string;
  title: string;
  members: member[];
  location: location;
}

type location = {
  address: string;
  map: string;
  weekDay: WEEK_DAY;
  nextMeeting: string;
}

type member = {
  name: string;
  role: ROLE;
}

export interface Hashmap<T> {
  [key : string]: T;
}