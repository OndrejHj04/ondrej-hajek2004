export const initial = { firstName: ["_", "_", "_", "_", "_"], secondName: ["_", "_", "_", "_", "_"], hover: false };
export type state = { firstName: string[]; secondName: string[], hover: boolean };
type name = {
  type: "name";
  index: number;
};
type hover = {
  type: "hover",
  act: boolean
}
export type actions = name | hover;
