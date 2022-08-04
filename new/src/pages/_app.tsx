import "@/styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { DefaultSeo } from "@/components/SEO";
import { trpc } from "@/utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
