

import { Footer } from "@/components/footer";
import { AuthProvider } from "@/context/AuthContext";
import { NextIntlClientProvider } from 'next-intl';
import { useLocale } from 'next-intl';
import { Tajawal } from "next/font/google";
import { Navbar } from "@/components/navbar";

const arabicFont = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--font-arabic" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? arabicFont.variable + " font-arabic" : "font-sans"} antialiased max-w-screen`}
    >
      <NextIntlClientProvider>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </NextIntlClientProvider>
    </div>
  );
}