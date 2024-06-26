import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Header from "@/Component/Dashboard/header";
import Sidebar from "@/Component/Dashboard/sidebar";

const lato = Lato({
  weight: ["100", "300", "400",  "700" ,"900" ],
  subsets: ["latin" ,"latin-ext"]
});

export const metadata: Metadata = {
  title: "Qataloog",
  description: "Qataloog frontend assement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Box sx={{
          overflowY:"hidden",
          height:"100vh"
        }}>
            <Header/>
            <Box className="flex py-5 bg-[#FCFCFF]">
              <Sidebar/>
              <Box sx={{
                height:'85vh',
                overflowY:"auto"
              }} className="px-5 w-full">
              {children}
              </Box>
            </Box>
        </Box>
      </body>
    </html>
  );
}
