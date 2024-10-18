import { matchRoutes } from "react-router";

describe("index route matching", () => {
  it("throws when the index route has children", () => {
    expect(() => {
      matchRoutes(
        [
          {
            path: "/users",
            children: [
              // Invalid configuration: index routes cannot have child routes
              // @ts-expect-error
              {
                index: true,
                children: [{ path: "not-valid" }],
              },
              { path: ":id" },
            ],
          },
        ],
        "/users/mj"
      );
    }).toThrow(
      new Error(
        'Index routes must not have child routes. Please remove all child routes from route path "/users/".'
      )
    );
  });

  // Additional test cases could go here
});
