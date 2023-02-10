import { Layout } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <Layout>
      {isLoading && <p>로딩중..</p>}
      <Component {...pageProps} />
    </Layout>
  );
}
