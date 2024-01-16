import Head from "./head"
import '@/style/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head /> */}
      <body>
        <header>Bu headerdi</header>
        {children}
        <footer>Bu footerdi</footer>
      </body>
    </html>
  )
}
