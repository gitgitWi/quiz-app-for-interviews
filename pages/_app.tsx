import { AppProps } from "next/app";
import { globalStyles } from "../shared/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}
