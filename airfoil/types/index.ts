export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  [key: string]: number;
}

export interface RingSettingsStrict {
  inset: string;
  color: string;
  size: string;
}

export interface RingSettings {
  inset?: number | string;
  color?: string;
  size?: number | string;
}