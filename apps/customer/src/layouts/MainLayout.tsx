import type { ReactNode } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNavigation";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <Header title="ExpressPick" />

      <main
        style={{
          padding: "20px",
          paddingBottom: "80px",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        {children}
      </main>

      <BottomNav />
    </>
  );
}