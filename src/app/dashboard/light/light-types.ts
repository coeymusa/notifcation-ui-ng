export interface Light {
  id: number;
  on: boolean;
  xy: number[];
  name: string;
  reachable: string;
  forEach(arg0: (light: any) => void): any;
}

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

export interface LightResponse {
  id: number;
  state: State;
  type: string;
  name: string;
  uniqueId: string;
}
