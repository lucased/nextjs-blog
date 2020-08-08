import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
import { Global } from "@emotion/core";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Global
          styles={{
            "@font-face": {
              fontFamily: "Orthodox Herbertarian, serif",
              src: "url('/fonts/OrthodoxHerbertarian.ttf') format('ttf')",
            },
            body: {
              backgroundImage: 'url(/space.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '70%',
              backgroundPosition: 'top center',
              backgroundOrigin: 'content-box'
            },
          }}
        />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
