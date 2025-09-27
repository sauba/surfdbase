import AbordagemHumanista from "@/components/AbordagemHumanista"
import About from "@/components/About"
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
      `}
    >
      <Header />
      <About />
      <MissaoVisaoValores />
      <AbordagemHumanista />
      <Footer />
    </main>
  )
}
