import type {RingSettings, RingSettingsStrict} from '../types'

const defaultRingSettings: RingSettingsStrict = {
  inset: `0`,
  color: `rgba(59, 130, 246, 0.5)`,
  size: `3px`,
};

const stringifyRingSettings = (
  settings: Partial<RingSettings>
): RingSettingsStrict => {
  const clone = { ...defaultRingSettings, ...settings };
  if (typeof clone.inset === "number") {
    clone.inset = `${clone.inset}px`;
  }
  if (typeof clone.size === "number") {
    clone.size = `${clone.size}px`;
  }
  return clone as RingSettingsStrict;
};

const ring = (settings: Partial<RingSettings> = defaultRingSettings) => {
  const { inset, color, size } = stringifyRingSettings(settings);
  return `box-shadow: ${inset} 0 0 ${size} ${color}`;
};

export default ring;