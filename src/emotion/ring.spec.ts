import ring from "./ring";

describe("ring", () => {
  it("will create the CSS for a ring", () => {
    expect(ring()).toBe(
      "box-shadow: 0 0 0 0 3px rgba(59, 130, 246, 0.5);"
    );
  });
  it("takes custom commands", () => {
    expect(ring({ inset: 5, color: "grey", size: 8 })).toBe(
      "box-shadow: 5px 0 0 0 8px grey;"
    );
  });
});
