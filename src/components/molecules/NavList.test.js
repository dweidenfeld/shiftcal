import { cleanup, render } from "@testing-library/svelte";

import NavList from "./NavList.svelte";

beforeEach(cleanup);
describe("NavList", () => {
  it("should not contain routes", async () => {
    const { container } = render(NavList);

    expect(container.querySelectorAll("li").length).toBe(0);
  });

  it("should render multiple routes", async () => {
    const { container } = render(NavList, {
      props: {
        routes: [{ name: "home", href: "." }, { name: "about", href: "about" }]
      }
    });

    expect(container.querySelectorAll("li").length).toBe(2);
  });

  it("should contain NavEntry", async () => {
    const { getByText } = render(NavList, {
      props: {
        routes: [{ name: "home", href: "." }]
      }
    });

    expect(getByText("home")).toBeTruthy();
  });
});
