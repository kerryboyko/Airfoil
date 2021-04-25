import altNameMap from "./constants/altNameMap";

const presetShadows: Record<string, string> = {
  sm: `0 1px 2px 0 rgba(0,0,0,0.05);`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);`,
  xxl: `0 25px 50px -12px rgba(0, 0, 0, 0.25);`,
  _default_: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`,
};

const customShadow = (intensity: number): string => {
  const hOffset = [0, 0];
  const vOffsets = [4, 2].map((v) => v * intensity);
  const blurs = [6, 4].map((v) => v * intensity);
  const spreads = [-1, -1].map((v) => v * intensity);
  const alphas = [0.1, 0.05].map((v) => (v * Math.sqrt(intensity)).toFixed(2));
  return (
    `${hOffset[0]}px ${vOffsets[0]}px ${blurs[0]}px ${spreads[0]}px rgba(0, 0, 0, ${alphas[0]}), ` +
    `${hOffset[1]}px ${vOffsets[1]}px ${blurs[1]}px ${spreads[1]}px rgba(0, 0, 0, ${alphas[1]});`
  );
};

const boxShadow = (shadowSize?: string | number) => {
  if (typeof shadowSize === "number") {
    return customShadow(shadowSize);
  }
  if (typeof shadowSize === "string") {
    if (shadowSize in presetShadows) {
      return presetShadows[shadowSize as string];
    }
    if (shadowSize.toLowerCase() in altNameMap) {
      return presetShadows[altNameMap[shadowSize.toLowerCase()]];
    }
  }

  return presetShadows._default_;
};

export default boxShadow;
