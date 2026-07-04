import type { Metadata } from "next";
import { Montserrat, Quicksand, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vida Mía Pastelería & Bistro Café",
  description: "Una experiencia única de sabor - Pan hecho en casa y repostería artesanal.",
  icons: {
    icon: "/assets/9e7da1f34b321d13277dec961b81b343ff15ef2f.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${quicksand.variable} ${playfairDisplay.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Floating WhatsApp Button - Global */}
        <a
          href="https://wa.me/50325119609"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[93px] lg:h-[93px] bg-[#4156a9] hover:bg-[#34468a] rounded-full flex items-center justify-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95"
          title="Chatea con nosotros"
        >
          <svg className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 37 37" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.3333 0C8.20783 0 0 8.20783 0 18.3333C0 21.7983 0.9625 25.0433 2.63633 27.808L1.001 33.3667C0.907105 33.6858 0.900927 34.0244 0.983115 34.3467C1.0653 34.6691 1.23282 34.9634 1.46806 35.1986C1.7033 35.4338 1.99757 35.6014 2.31993 35.6836C2.6423 35.7657 2.98085 35.7596 3.3 35.6657L8.85867 34.0303C11.7162 35.7593 14.9934 36.6712 18.3333 36.6667C28.4588 36.6667 36.6667 28.4588 36.6667 18.3333C36.6667 8.20783 28.4588 0 18.3333 0ZM14.1863 22.4822C17.8952 26.1892 21.4353 26.6787 22.6857 26.7245C24.5868 26.7942 26.4385 25.3422 27.159 23.6573C27.25 23.4477 27.283 23.2176 27.2546 22.9909C27.2262 22.7641 27.1375 22.5492 26.9977 22.3685C25.993 21.0852 24.6345 20.163 23.3072 19.2463C23.03 19.0547 22.6895 18.9778 22.3569 19.0319C22.0243 19.0859 21.7256 19.2665 21.5233 19.536L20.4233 21.2135C20.3655 21.3037 20.2754 21.3683 20.1714 21.3943C20.0675 21.4202 19.9576 21.4053 19.8642 21.3528C19.118 20.9257 18.0308 20.1997 17.2498 19.4187C16.4688 18.6377 15.7868 17.6 15.4037 16.9015C15.3562 16.8128 15.3424 16.7098 15.365 16.6117C15.3876 16.5136 15.445 16.427 15.5265 16.368L17.2205 15.1103C17.4623 14.9001 17.6183 14.6084 17.6588 14.2906C17.6994 13.9728 17.6217 13.6512 17.4405 13.387C16.6192 12.1843 15.6622 10.6553 14.2743 9.6415C14.0952 9.51171 13.8854 9.43078 13.6655 9.40667C13.4457 9.38256 13.2233 9.4161 13.0203 9.504C11.3337 10.2263 9.87433 12.078 9.944 13.9828C9.98983 15.2332 10.4793 18.7733 14.1863 22.4822Z" fill="white" />
          </svg>
        </a>
      </body>
    </html>
  );
}

