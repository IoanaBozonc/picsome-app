import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "PicSome App",
  description: "O aplicație foto creată cu Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="antialiased bg-gray-50 min-h-screen">
        {/* BARA DE SUS (HEADER) */}
        <header 
          style={{backgroundColor: '#dc2626', color:'white'}}
          className="p-4 shadow-xl sticky top-0 z-50 flex justify-between items-center px-10">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-90 transition">
            PIC SOME
          </Link>
          <nav className="flex gap-8 font-bold">
            <Link href="/favorites" className="hover:text-red-200 transition">Favorite</Link>
            <Link href="/store" className="hover:text-red-200 transition">Magazin 🛒</Link>
          </nav>
        </header>

        {/* CONȚINUTUL PAGINII */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}