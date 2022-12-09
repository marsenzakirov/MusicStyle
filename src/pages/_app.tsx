import NavBar from "@components/navbar";
import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(251.51deg, #180060 0%, #313373 100%)",
      }}
      className="flex"
    >
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
