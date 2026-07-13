import "./globals.css";

export const metadata = {
  title: "The Yatra Company",
  description: "Explore domestic and international tour packages with The Yatra Company.",
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}