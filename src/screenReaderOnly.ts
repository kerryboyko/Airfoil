const srOnlyCSS: string = [
  "position: absolute;",
  "width: 1px;",
  "height: 1px;",
  "padding: 0;",
  "margin: -1px;",
  "overflow: hidden;",
  "clip: rect(0, 0, 0, 0);",
  "white-space: nowrap;",
  "border-width: 0;",
].join("\n");

const clearSrOnlyCSS: string = [
  "position: static;",
  "width: auto;",
  "height: auto;",
  "padding: 0;",
  "margin: 0;",
  "overflow: visible;",
  "clip: auto;",
  "white-space: normal",
].join("\n");

interface ScreenReaderSettings {
  reset?: boolean;
  showOnFocus?: boolean;
}
export const screenReader = (
  config: ScreenReaderSettings = { reset: false, showOnFocus: false }
): string => {
  if (config.reset) {
    return clearSrOnlyCSS;
  }
  return srOnlyCSS.concat(
    config.showOnFocus ? `\n&:focus {\n${clearSrOnlyCSS}\n}` : ""
  );
};

export default screenReader;
