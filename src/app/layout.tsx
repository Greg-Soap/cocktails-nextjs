import Navbar from "@/components/navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/context/Theme";
import { SearchProvider } from "@/context/Search";
import { Suspense } from "react";
import Loading from "./loading";

const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata = {
  title: "Cocktails Wiki",
  description: "Find information regarding a large database of cocktails",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <SearchProvider>
            <div className="container">
              <Navbar />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </div>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
