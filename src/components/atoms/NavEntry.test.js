import { cleanup, render } from "@testing-library/svelte";

import NavEntry from "./NavEntry.svelte";

beforeEach(cleanup);
describe("NavEntry", () => {
  it("should not render without properties", async () => {
    const { container } = render(NavEntry);

    expect(container.querySelectorAll("li").length).toBe(0);
  });

  it("should not render if name is missing", async () => {
    const { container } = render(NavEntry, { props: { href: "home" } });

    expect(container.querySelectorAll("li").length).toBe(0);
  });

  it("should not render if href is missing", async () => {
    const { container } = render(NavEntry, { props: { name: "home" } });

    expect(container.querySelectorAll("li").length).toBe(0);
  });

  it("should render with name and href", async () => {
    const { getByText } = render(NavEntry, {
      props: { name: "home", href: "home" }
    });

    expect(getByText("home")).toBeTruthy();
  });

  it("should contain correct href", async () => {
    const { getByText } = render(NavEntry, {
      props: { name: "home", href: "home" }
    });

    expect(getByText("home").href).toMatch(/.*\/home/);
  });

  it("should be selected", async () => {
    const { getByText } = render(NavEntry, {
      props: { name: "home", href: ".", segment: "home" }
    });

    expect(getByText("home").className).toBe("selected");
  });

  it("should activate prefetch", async () => {
    const { getByText } = render(NavEntry, {
      props: { name: "home", href: "home", prefetch: true }
    });

    expect(getByText("home").rel).toBe("prefetch");
  });

  it("should select by default if segment is undefined", async () => {
    const { getByText } = render(NavEntry, {
      props: { name: "home", href: "home", selectByDefault: true }
    });

    expect(getByText("home").className).toBe("selected");
  });
});
