import Missao from "../Missao"
import Valores from "../Valores"
import Visao from "../Visao"

export default function MissaoVisaoValores() {
  return (
    <div
      className={`
        min-h-screen
        w-full
        flex
        flex-col
        xl:grid
        xl:grid-cols-3
        bg-blue-400
        text-red-50
        justify-around
        font-castoro-titling
      `}
      id="missaovisaovalores"
    >
      <Missao />
      <Visao />
      <Valores />
    </div>
  )
}
