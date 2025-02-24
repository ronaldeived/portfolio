import "./globals.css";
import { Navbar } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import {metaData} from "@/app/config";

export const metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
              <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full">
                  <Navbar />
                  {children}
                  <Footer />
              </main>
          </body>
      </html>
  );
}
