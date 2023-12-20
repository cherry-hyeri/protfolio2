import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/layout";

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <>
    <Global styles={globalStyles} />
      <Layout />
    </>
  );
}
