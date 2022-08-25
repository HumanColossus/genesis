// // @ts-check
// import { env } from "./src/env/server.mjs";

import { withPlausibleProxy } from "next-plausible";
import nextMDX from "@next/mdx"

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react', }
})

function defineNextConfig(config) {
  return withMDX({
    ...config,
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  })
}


export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/memo",
        permanent: false,
      },
      {
        source: "/apply",
        destination: "https://fepmaftot5b.typeform.com/to/YgUcfdxu",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/colossusfyi",
        permanent: false,
      },
      {
        source: "/figma",
        destination: "https://www.figma.com/file/pxnEjpKyfYBEr9orAVgv11/The-Human-Colossus%3A-Design-%26-Prototyping",
        permanent: false,
      },
    ];
  },
});

