import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <div className="h-full flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div className="h-full w-full flex flex-col bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
