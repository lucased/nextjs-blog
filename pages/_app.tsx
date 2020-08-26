import { AppProps } from "next/app";
import theme from "../lib/theme";
import { ThemeProvider } from "theme-ui";
import { ReactQueryDevtools } from "react-query-devtools";
import { Provider as AuthProvider } from "next-auth/client";
import { ModalProvider } from "../components/Elements/Modal";

const App = ({ Component, pageProps }: AppProps) => {
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
