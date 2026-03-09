import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Studio – Portfolio & Blog",
  description: "A minimalist personal portfolio, projects and writing hub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <div className="nav-inner">
              <Link href="/" className="nav-brand">
                <div className="nav-logo" />
                <div className="nav-title">
                  <span>Your Studio</span>
                  <span>Portfolio · Writing · Experiments</span>
                </div>
              </Link>

              <nav className="nav-links">
                <Link href="/projects" className="pill-link">
                  Projects
                </Link>
                <Link href="/skills" className="pill-link">
                  Skills
                </Link>
                <Link href="/blog" className="pill-link">
                  Blog
                </Link>
                <Link href="/contact" className="pill-link">
                  Contact
                </Link>
                <Link href="/admin" className="pill-link pill-link--primary">
                  <span className="dot" />
                  <span>CMS</span>
                </Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="footer">
            <div className="footer-inner">
              <span>© {new Date().getFullYear()} · Your Name</span>
              <span>Designed as a calm, focused personal studio.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
