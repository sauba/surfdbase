import About from "@/components/About"
import Atletas from "@/components/Atletas"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MissaoVisaoValores from "@/components/MissaoVisaoValores"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projeto Surf DBASE",
  description: "This is the Surf DBASE Project website",
}

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-center
      bg-blue-400
      `}
    >
      <Header />
      <About />
      <MissaoVisaoValores />
      <Atletas />
      <Footer />
    </main>
  )
}
