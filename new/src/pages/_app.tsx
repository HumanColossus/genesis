import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";
import { DefaultSeo } from "components/SEO";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
