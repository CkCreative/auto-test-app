import { ReactElement } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
