import Nav from "./Nav.svelte";
import { render, cleanup } from "@testing-library/svelte";

beforeEach(cleanup);

describe("Nav", () => {
  it("should render without props", async () => {
    const { getByText } = render(Nav);

    expect(getByText("home")).toBeTruthy();
  });

  it("should select home", async () => {
    const { getByText } = render(Nav);

    expect(getByText("home").className).toBe("selected");
  });

  it("should select about", async () => {
    const { getByText } = render(Nav, { props: { segment: "about" } });

    expect(getByText("about").className).toBe("selected");
  });
});
