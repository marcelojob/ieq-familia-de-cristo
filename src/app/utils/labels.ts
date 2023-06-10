import { ROLE, WEEK_DAY } from "../api/enums";
import { Hashmap } from "#/api/models";

export const weekDayLabels: Hashmap<string> = {
  [WEEK_DAY.SUNDAY]: "Domingo",
  [WEEK_DAY.MONDAY]: "Segunda-feira",
  [WEEK_DAY.TUESDAY]: "Terça-feira",
  [WEEK_DAY.WEDNESDAY]: "Quarta-feira",
  [WEEK_DAY.THURSDAY]: "Quinta-feira",
  [WEEK_DAY.FRIDAY]: "Sexta-feira",
  [WEEK_DAY.SATURDAY]: "Sábado",
}

export const weekDayDateLabel: Hashmap<string> = {
  0: "Dom",
  1: "Seg",
  2: "Ter",
  3: "Qua",
  4: "Qui",
  5: "Sex",
  6: "Sab",
}

export const roleLabels: Hashmap<string> = {
  [ROLE.LEADER]: "Líder",
  [ROLE.VICE_LEADER]: "Líder em treinamento",
  [ROLE.HOST]: "Anfitrião",
  [ROLE.MEMBER]: "Membro",
}