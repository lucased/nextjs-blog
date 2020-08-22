import { AppProps } from "next/app";
import theme from "../lib/theme";
import { ThemeProvider } from "theme-ui";
import { ReactQueryDevtools } from "react-query-devtools";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </ThemeProvider>
  );
};

export default App;
