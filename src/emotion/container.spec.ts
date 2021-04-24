import container from "./container";

describe("container", () => {
  it("generates container css", () => {
    expect(container()).toBe(
`width: 100%;
@media screen and (min-width: 640px) {
  max-width: 640px;
}
@media screen and (min-width: 768px) {
  max-width: 768px;
}
@media screen and (min-width: 1024px) {
  max-width: 1024px;
}
@media screen and (min-width: 1280px) {
  max-width: 1280px;
}
@media screen and (min-width: 1536px) {
  max-width: 1536px;
}`
    );
  });
  it("generates container css with custom breakpoints", () => {
    expect(container([400, 800, 1200, 1600, 2000])).toBe(
`width: 100%;
@media screen and (min-width: 400px) {
  max-width: 400px;
}
@media screen and (min-width: 800px) {
  max-width: 800px;
}
@media screen and (min-width: 1200px) {
  max-width: 1200px;
}
@media screen and (min-width: 1600px) {
  max-width: 1600px;
}
@media screen and (min-width: 2000px) {
  max-width: 2000px;
}`
    );
  });
});
