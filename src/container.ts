import type {Breakpoints} from './types'
const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const container = (
  breakpoints: number[] = Object.values(defaultBreakpoints)
): string => {
  return [`width: 100%;`]
    .concat(
      breakpoints.map(
        (
          breakpoint: number
        ) => `@media screen and (min-width: ${breakpoint}px) {
  max-width: ${breakpoint}px;
}`
      )
    )
    .join("\n");
};

export default container;
