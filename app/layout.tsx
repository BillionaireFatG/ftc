import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { AICoach } from "@/components/layout/AICoach";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FTC Drivetrain Mastery | Speed, Control, Precision",
  description: "Master robot drivetrains for FTC, FRC, and FLL competitions. Interactive calculators, 3D simulators, and comprehensive guides for tank, mecanum, swerve, and omni drives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 lg:ml-64">
              {children}
            </main>
          </div>
          <AICoach />
        </ThemeProvider>
      </body>
    </html>
  );
}
