import "@/styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { DefaultSeo } from "@/components/SEO";
import { trpc } from "@/utils/trpc";
import { MarqueeLayout } from "@/components/SEO/marquee-layout";
import LogRocket from "logrocket";
import PlausibleProvider from "next-plausible";
import MDXComponents from "./posts/MDXComponents";
import {MDXProvider} from "@mdx-js/react"

const MyApp: AppType = ({ Component, pageProps }) => {
  LogRocket.init("insilica-labs/colossus");
  return (
    <MDXProvider components={MDXComponents}>
      <PlausibleProvider domain="colossus.fyi">
      <DefaultSeo />
      <MarqueeLayout>
          <Component {...pageProps} />
          </MarqueeLayout>
      </PlausibleProvider>
    </MDXProvider>
    
  );
};

export default trpc.withTRPC(MyApp);
