export type intro = { firstName: string[]; secondName: string[]; hover: boolean };
export const introObject = { firstName: ["_", "_", "_", "_", "_"], secondName: ["_", "_", "_", "_", "_"], hover: false};

type name = {
  type: "name";
  index: number;
};
type hover = {
  type: "hover";
  act: boolean;
};
export type introActions = name | hover;