import altNameMap from "./constants/altNameMap";
/*



const altNameMap: Record<string, string> = {
  small: "sm",
  medium: "md",
  large: "large",
  "extra-large": "xl",
  "x-large": "xl",
  xlarge: "xl",
  "xx-large": "xxl",
  "extra-extra-large": "xxl",
  "2xl": "xxl",
};

const customShadow = (intensity: number): string => {
  const hOffset = [0, 0];
  const vOffsets = [4, 2].map((v) => v * intensity);
  const blurs = [6, 4].map((v) => v * intensity);
  const spreads = [-1, -1].map((v) => v * intensity);
  const alphas = [0.1, 0.05].map((v) => v * Math.sqrt(intensity));
  return (
    `${hOffset[0]} ${vOffsets[0]} ${blurs[0]} ${spreads[0]} rgba(0, 0, 0, ${alphas[0]}), ` +
    `${hOffset[1]} ${vOffsets[1]} ${blurs[1]} ${spreads[1]} rgba(0, 0, 0, ${alphas[1]});`
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



*/

const presetShadows: Record<string, string> = {
  sm: `drop-shadow(0 1px 1px rgba(0,0,0,0.05))`,
  md: `drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))`,
  lg: `drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))`,
  xl: `drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))`,
  xxl: `drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))`,
  none: `drop-shadow(0 0 #0000)`,
  _default_: `drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))`,
};

const customShadow = (intensity: number): string => {
  const hOffset = [0, 0];
  const vOffsets = [4, 2].map((v) => v * intensity);
  const blurs = [3, 2].map((v) => v * intensity);
  const alphas = [0.05, 0.04].map((v) => v * Math.sqrt(intensity));
  return (
    `${hOffset[0]} ${vOffsets[0]} ${blurs[0]} rgba(0, 0, 0, ${alphas[0]}) ` +
    `${hOffset[1]} ${vOffsets[1]} ${blurs[1]} rgba(0, 0, 0, ${alphas[1]})`
  );
};

export const filterDropShadow = (shadowSize?: string | number) => {
  if (typeof shadowSize === "number") {
    return `filter: ${customShadow(shadowSize)};`;
  }
  if (typeof shadowSize === "string") {
    if (shadowSize in presetShadows) {
      return `filter: ${presetShadows[shadowSize]};`;
    }
    if (shadowSize.toLowerCase() in altNameMap) {
      return `filter: ${presetShadows[altNameMap[shadowSize.toLowerCase()]]};`;
    }
  }

  return `filter; ${presetShadows._default_};`;
};

export default filterDropShadow;