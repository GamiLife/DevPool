import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeGamification } from "@gamiui/standard";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}

export default MyApp;
