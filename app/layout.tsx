import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { StepCounter } from "@/components/step-counter";
import { GlobalBackground } from "@/components/global-background";
import { ThemeProvider } from "@/components/theme-provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sanmeet Singh | Developer",
  description:
    "Engineer building scalable systems, intelligent applications, and clean user experiences.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
  ],
};

const foucScript = `(function(){try{var s=localStorage.getItem('portfolio-theme');var t=s||'system';var r;if(t==='light'){r='light'}else if(t==='dark'){r='dark'}else{r=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(r==='light'){document.documentElement.classList.add('light')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: foucScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <GlobalBackground />
          <Navigation />
          <StepCounter />
          <main className="relative z-10">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
