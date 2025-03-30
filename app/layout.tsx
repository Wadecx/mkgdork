import './globals.css';
import type { Metadata } from 'next';
import { Footer, Header } from '@/layouts';
import { ViewTransitions } from 'next-view-transitions';
import { GoogleTagManager, CookiesBanner } from '@/components';
import { fontVariables } from '@/libs/fonts';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="fr">
      <body className={`${fontVariables} font-montserrat`}>
          <CookiesBanner />
          <GoogleTagManager gtmId="" />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
