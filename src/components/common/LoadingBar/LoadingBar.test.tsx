import { LoaderVariantsEnum } from "@networkraildigitalfactory/react-components";
import { getRenderedContent } from "./tests-data";

const _loadingBarFullWidthIndeterminate = "fullWidth__loader";
const _loadingBarFullWidthDeterminate = "fullWidth__progress";
const _loadingBarCustomWidth = { width: "300px" };
const _loadingBarCustomCss = "ProgressBarTestClassName";

describe("progressBar", () => {
  test("should render default with 100% width and `loader` variant", () => {
    const { loadingElement } = getRenderedContent();
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass(_loadingBarFullWidthIndeterminate);
  });

  test("Should render with custom width", () => {
    const { loadingElement } = getRenderedContent({ customStyle: _loadingBarCustomWidth });
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveStyle(_loadingBarCustomWidth);
  });

  test("Should handle 'customCssClass' prop", () => {
    const { loadingElement } = getRenderedContent({ customCssClass: _loadingBarCustomCss });
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass(_loadingBarFullWidthIndeterminate, _loadingBarCustomCss);
  });

  test("Should render `progress` variant", () => {
    const { loadingElement } = getRenderedContent({ variant: LoaderVariantsEnum.PROGRESS });
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass(_loadingBarFullWidthDeterminate);
  });
});
