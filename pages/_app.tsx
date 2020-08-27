import { useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import theme from "../lib/theme";
import { ThemeProvider } from "theme-ui";
import { ReactQueryDevtools } from "react-query-devtools";
import { Provider as AuthProvider } from "next-auth/client";
import { ModalProvider } from "../components/Elements/Modal";
import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen />
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
