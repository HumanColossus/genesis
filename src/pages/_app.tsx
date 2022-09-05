import "../styles/globals.css";
import LogRocket from "logrocket";
import PlausibleProvider from "next-plausible";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { DefaultSeo } from "src/components/SEO";
import { trpc } from "src/utils/trpc";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { useEffect } from "react";
// import MDXComponents from "./posts/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export type NextPageWithAuth = NextPage & {
  auth?: boolean;
};

type AppPropsWithAuth = AppProps & {
  Component: NextPageWithAuth;
};

const Auth = ({ children }: { children: any }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!isUser) {
      signIn();
    }
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  return null;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithAuth) => {
  LogRocket.init("insilica-labs/colossus");
  return (
    // <MDXProvider components={MDXComponents}>
    <SessionProvider session={session}>
      <PlausibleProvider domain="colossus.fyi">
        <DefaultSeo />
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </PlausibleProvider>
    </SessionProvider>
    // </MDXProvider>
  );
};

export default trpc.withTRPC(MyApp);
