import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Geegpay Fitness Dashboard Challenge",
  description:
    "A hackerthon challenge hosted by Geegpay | built by Ayoola Adewale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} scroll`}>
        <Providers attribute="class">{children}</Providers>
      </body>
    </html>
  );
}
