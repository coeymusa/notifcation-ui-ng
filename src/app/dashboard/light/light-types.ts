export interface State {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: number[];
  ct: number;
  alert: string;
  colorMode: string;
  mode: string;
  reachable: boolean;
}

export interface Light {
  id: number;
  state: State;
  type: string;
  name: string;
  uniqueId: string;
  forEach(arg0: (light: any) => void): any;
}
