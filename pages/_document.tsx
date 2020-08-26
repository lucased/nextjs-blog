import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <div id="modal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
