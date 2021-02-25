import { AppProps } from "next/app";
import { globalStyles } from "../shared/styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faChevronLeft);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}
