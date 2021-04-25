import screenReaderOnly from "./screenReaderOnly";

describe("screenReaderOnly", () => {
  it("will create a screen-reader-only element", () => {
    expect(screenReaderOnly()).toBe(
      [
        "position: absolute;",
        "width: 1px;",
        "height: 1px;",
        "padding: 0;",
        "margin: -1px;",
        "overflow: hidden;",
        "clip: rect(0, 0, 0, 0);",
        "white-space: nowrap;",
        "border-width: 0;",
      ].join("\n")
    );
  });
  it("allows you to reset", () => {
    expect(screenReaderOnly({ reset: true })).toBe(
      [
        "position: static;",
        "width: auto;",
        "height: auto;",
        "padding: 0;",
        "margin: 0;",
        "overflow: visible;",
        "clip: auto;",
        "white-space: normal;",
      ].join("\n")
    );
  });
  it("creates something that appears only on focuse", () => {
    expect(screenReaderOnly({ showOnFocus: true })).toBe(
      [
        "position: absolute;",
        "width: 1px;",
        "height: 1px;",
        "padding: 0;",
        "margin: -1px;",
        "overflow: hidden;",
        "clip: rect(0, 0, 0, 0);",
        "white-space: nowrap;",
        "border-width: 0;",
      ]
        .concat(`&:focus {`)
        .concat([
          "position: static;",
          "width: auto;",
          "height: auto;",
          "padding: 0;",
          "margin: 0;",
          "overflow: visible;",
          "clip: auto;",
          "white-space: normal;",
        ])
        .concat("}")
        .join("\n")
    );
  });
});
