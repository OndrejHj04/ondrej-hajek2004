export type screen = { width: number; height: number; scrollY: number };
export const screenObject = { width: window.innerWidth, height: window.innerHeight, scrollY: window.scrollY };

type resize = {
  type: "resize";
};
type scroll = {
  type: "scroll";
};

export type screenActions = resize | scroll;

export type intro = { firstName: string[]; secondName: string[]; hover: boolean, swing: boolean };
export const introObject = { firstName: ["_", "_", "_", "_", "_"], secondName: ["_", "_", "_", "_", "_"], hover: false, swing: false };

type name = {
  type: "name";
  index: number;
};
type hover = {
  type: "hover";
  act: boolean;
};
type swing = {
  type: "swing";
};
export type introActions = name | hover | swing;

export type skills = { offsets: number[] };
export const skillsObject = { offsets: [] };

type offset = {
  type: "offset";
};
export type skillsActions = offset;
