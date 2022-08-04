import "@/styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { DefaultSeo } from "@/components/SEO";
import { trpc } from "@/utils/trpc";
import { MarqueeLayout } from "@/components/SEO/marquee-layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <MarqueeLayout>
        <Component {...pageProps} />
      </MarqueeLayout>
    </>
  );
};

export default trpc.withTRPC(MyApp);
