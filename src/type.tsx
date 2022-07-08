export const initial = { firstName: ["_", "_", "_", "_", "_"], secondName: ["_", "_", "_", "_"] };
export type state = { firstName: string[]; secondName: string[] };
type name = {
  type: "name";
  index: number;
};
export type actions = name;
