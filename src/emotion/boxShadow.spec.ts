import boxShadow from "./boxShadow";

describe("boxShadow", () => {
  it("returns a default box shadow", () => {
    expect(boxShadow()).toBe(
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    );
  });
  it("returns a box shadow if the key makes no sense", () => {
    expect(boxShadow('foobish')).toBe(
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    );
  });
  it("returns box shadows of different specified sizes", () => {
    expect(boxShadow("sm")).toBe("0 1px 2px 0 rgba(0,0,0,0.05);");
    expect(boxShadow("md")).toBe(
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
    );
    expect(boxShadow("lg")).toBe(
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
    );
    expect(boxShadow("xl")).toBe(
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
    );
    expect(boxShadow("xxl")).toBe("0 25px 50px -12px rgba(0, 0, 0, 0.25);");
  });
  it("returns custom box shadows based on numeric values", () => {
    expect(boxShadow(0.5)).toBe(
      "0px 2px 3px -0.5px rgba(0, 0, 0, 0.07), 0px 1px 2px -0.5px rgba(0, 0, 0, 0.04);"
    );
    expect(boxShadow(1)).toBe(
      "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.05);"
    );
    expect(boxShadow(2)).toBe(
      "0px 8px 12px -2px rgba(0, 0, 0, 0.14), 0px 4px 8px -2px rgba(0, 0, 0, 0.07);"
    );
    expect(boxShadow(4)).toBe(
      "0px 16px 24px -4px rgba(0, 0, 0, 0.20), 0px 8px 16px -4px rgba(0, 0, 0, 0.10);"
    );
    expect(boxShadow(8)).toBe(
      "0px 32px 48px -8px rgba(0, 0, 0, 0.28), 0px 16px 32px -8px rgba(0, 0, 0, 0.14);"
    );
  });
});
