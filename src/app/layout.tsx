import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../components/LanguageContext";
import { LanguageBanner } from "../../components/LanguageBanner";

export const metadata: Metadata = {
  title: "Upen Yadav - BJP Candidate | Shahpura Assembly Constituency",
  description: "Official website of Upen Yadav, BJP Candidate for Shahpura Assembly Constituency (042). Committed to public service, community development, and progressive governance.",
  keywords: ["Upen Yadav", "BJP", "Shahpura", "Assembly", "Politician", "Rajasthan", "Public Service"],
  authors: [{ name: "Upen Yadav" }],
  openGraph: {
    title: "Upen Yadav - BJP Candidate | Shahpura Assembly Constituency",
    description: "Official website of Upen Yadav, BJP Candidate for Shahpura Assembly Constituency (042).",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upen Yadav - BJP Candidate | Shahpura Assembly Constituency",
    description: "Official website of Upen Yadav, BJP Candidate for Shahpura Assembly Constituency (042).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <NavBar />
          <LanguageBanner />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
