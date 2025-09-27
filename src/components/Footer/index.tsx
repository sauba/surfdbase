import {
  InstagramLogo,
  TrademarkRegistered,
  WhatsappLogo
} from "@phosphor-icons/react"
import Link from "next/link"
import Logo from "../Logo"

export default function Footer() {
  return (
    <footer
      className={`w-full bg-black justify-center items-center text-center min-h-screen`}
      id="contato"
    >
      <div
        className={`flex w-full justify-center items-center text-center text-red-50 min-h-screen gap-10`}
      >
        <div className={`flex flex-col font-pt-mono hover:cursor-none`}>
          <span className="mx-auto">
            <Logo />
          </span>

          <span
            className={`flex flex-col md:flex-row justify-center items-center text-xl xl:text-2xl tracking-widest gap-2`}
          >
            Acreditamos no Poder Transformador do Surf.
          </span>

          <span className={`py-1 text-xl xl:text-2xl tracking-wider flex-wrap`}>
            🌊 Do Cabo para o Mundo, Pelo Surf e Pela vida.
          </span>

          <span
            className={`pt-8 pb-4 text-md text-zinc-100 tracking-widest flex-wrap`}
          >
            Informações:
          </span>

          <div className={`flex justify-center items-center gap-6`}>
            <div className={`animate-wiggle`}>
              <span className={`text-rose-400`}>
                <Link
                  href="https://www.instagram.com/parafajsp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/558185259168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={48} />
                </Link>
              </span>
            </div>

          </div>
        </div>
      </div>

      <div
        className={`flex-col justify-center items-center text-center text-xs xl:text-sm text-sky-800`}
      >
        <span className={`flex justify-center tracking-tighter text-zinc-100`}>
          Developed by Thiago J. de Queiroz - Projeto Surf DBASE
          <TrademarkRegistered size={10} />
          2025 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
