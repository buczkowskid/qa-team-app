import { render } from "@testing-library/react";
import React from "react";
import RandomImage from "./RandomImage";

describe("RandomImage", () => {
  test("renders the image with the correct source when keyword is provided", () => {
    const keyword = "mountain";
    const { getByRole } = render(<RandomImage keyword={keyword} />);
    const img = getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", `https://source.unsplash.com/350x200/?${keyword}`);
  });

  test("renders the image with a generic source when no keyword is provided", () => {
    const { getByRole } = render(<RandomImage />);
    const img = getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://source.unsplash.com/350x200/?");
  });
});
