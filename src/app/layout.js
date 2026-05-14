import "./globals.css";
import Header from "../features/Header"; 

export const metadata = {
  title: "PicSome App",
  description: "O aplicație foto creată cu Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="antialiased bg-gray-50 min-h-screen">
        <Header /> {/*  noul fisier */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}