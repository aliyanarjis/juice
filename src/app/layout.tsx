import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
// import { useEffect } from "react";
import Nav from "./component/navigationBar/nav";
import Footer from "./component/footer/footer";
import Top from "./component/back_top/top";
import Spinner from "./component/spinner/spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);


  return (
    <html lang="en">
      <head>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"  />
        
      {/* <link href="css/bootstrap.min.css" rel="stylesheet" /> */}

      </head>
      <body className={inter.className}>
        <Nav />
        <Spinner />
        {children}
        <Top /> 
        <Footer />


       



        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" ></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTriger.min.js"></script>
      </body>
    </html>
  );
}
