import { AppProps } from "next/app";
import theme from "../lib/theme";
import { ThemeProvider } from "theme-ui";
import { ReactQueryDevtools } from "react-query-devtools";
import { Provider } from "next-auth/client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
