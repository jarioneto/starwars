export enum Sides {
  dark = 4,
  light = 1
}

export type Side = Sides | null;

export interface SideContext {
  side: Side;
  setSide: (side: Side) => void;
}
