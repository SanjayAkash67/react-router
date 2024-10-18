import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";

const renderWithRouter = (initialEntries) => {
  return TestRenderer.create(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route
          element={
            <div>
              <h1>Layout</h1>
              <Outlet />
            </div>
          }
        >
          <Route
            path="*"
            element={
              <div>
                <h1>Splat</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("A layout route", () => {
  it("does not match when none of its children do", () => {
    let renderer;
    TestRenderer.act(() => {
      renderer = renderWithRouter(["/"]);
    });
    expect(renderer.toJSON()).toMatchInlineSnapshot(`<h1>Index</h1>`);
  });

  const specialCharacters = ["@", "-", "~", "_", ".", "%20"];
  specialCharacters.forEach((char) => {
    it(`allows routes starting with "${char}"`, () => {
      let renderer;
      TestRenderer.act(() => {
        renderer = renderWithRouter([`${char}splat`]);
      });
      expect(renderer.toJSON()).toMatchInlineSnapshot(`
        <div>
          <h1>Layout</h1>
          <div>
            <h1>Splat</h1>
          </div>
        </div>
      `);
    });
  });
});
