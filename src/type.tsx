export type window = {offsets: number[];height: number;width: number; position: number;};
export const initial = { firstName: ["_", "_", "_", "_", "_"], secondName: ["_", "_", "_", "_", "_"], hover: false, window: { offsets: [], height: window.innerHeight, width: window.innerWidth, position: window.screenY } };
export type state = { firstName: string[]; secondName: string[]; hover: boolean; window: window };
type name = {
  type: "name";
  index: number;
};
type hover = {
  type: "hover";
  act: boolean;
};
type resize = {
  type: "resize";
};
type scroll = {
  type: "scroll";
};
export type actions = name | hover | resize | scroll;
