import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABADÁ Capoeira Belgique",
  description: "Cours de capoeira à Bruxelles avec Mestre Tigre",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
