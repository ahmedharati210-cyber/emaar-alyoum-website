import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "الطريق الصحيح - استيراد أجود المواد الغذائية",
  description: "شركة الطريق الصحيح - استيراد وتوزيع المواد الغذائية عالية الجودة في ليبيا. الوكالة الحصرية لـ Dolce Chocolate",
  keywords: "الطريق الصحيح, استيراد, مواد غذائية, ليبيا, طرابلس, Dolce Chocolate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={inter.variable}>
      <body className="antialiased font-sans m-0 p-0">
        <Navigation />
        <main className="m-0 p-0">{children}</main>
        <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white border-t border-gray-800">
          <div className="container-custom">
            <div className="py-16">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <div className="flex items-center space-x-4 space-x-reverse mb-6">
                    <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/logo.png"
                        alt="شعار شركة الطريق الصحيح"
                        className="w-full h-full object-contain"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">الطريق الصحيح</h3>
                      <p className="text-xs text-gray-400">ALTAREQ ALSAHEH</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    شركة رائدة في استيراد وتوزيع المواد الغذائية عالية الجودة في ليبيا
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                        الرئيسية
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                        عن الشركة
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                        اتصل بنا
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li>
                      <a href="tel:0917040088" className="hover:text-white transition-colors">
                        الهاتف: 0917040088
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@altaareeq.com" className="hover:text-white transition-colors">
                        البريد: info@altaareeq.com
                      </a>
                    </li>
                    <li>طرابلس – ليبيا</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-400 text-sm text-center md:text-right">
                    © {new Date().getFullYear()} شركة الطريق الصحيح المحدودة لاستيراد المواد الغذائية. جميع الحقوق محفوظة.
                  </p>
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <p className="text-gray-500 text-xs">
                      تأسست عام 2018
                    </p>
                    <p className="text-sm text-gray-400 text-center md:text-right">
                      Created by{" "}
                      <a
                        href="https://www.facebook.com/profile.php?id=61580630652651"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-purple-400 hover:text-purple-300 transition-colors duration-200 cursor-pointer"
                      >
                        Harati
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

