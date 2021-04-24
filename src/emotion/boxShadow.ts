const presetShadows = {
  sm: `0 1px 2px 0 rgba(0,0,0,0.05);`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);`,
  xxl: `0 25px 50px -12px rgba(0, 0, 0, 0.25);`,
  _default_: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`,
};

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
  if (shadowSize in presetShadows) {
    return presetShadows[shadowSize]
  }
  if(shadowSize.toLowerCase() in altNameMap){
    return presetShadows[altNameMap[shadowSize.toLowerCase()]];
  }

  return presetShadows._default_;
};

export default boxShadow;
