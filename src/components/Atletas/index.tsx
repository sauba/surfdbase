import KeenSliderAuto from "../KeenSliderAuto"
import KeenSliderAutoAtletas from "../KeenSliderAutoAtletas"

export default function Atletas() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        text-red-50
        `}
      id="atletas"
    >
      <p
        className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              pt-8
              xl:pb-4
              2xl:pl-40
              2xl:pt-20
              2xl:text-8xl
              font-bad-script
            `}
      >
        Atleta do Mês
      </p>

      <div className={`w-full flex flex-col justify-center items-center mx-auto my-4 lg:my-6 overflow-hidden`}>
        <KeenSliderAuto />
      </div>

      <p
        className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              pt-8
              xl:pb-4
              2xl:pl-40
              2xl:pt-20
              2xl:text-8xl
              font-bad-script
            `}
      >
        Nossos Atletas
      </p>

      <div className={`w-full flex flex-col justify-center items-center mx-auto my-4 lg:my-6 overflow-hidden`}>
        <KeenSliderAutoAtletas />
      </div>
    </div>
  )
}
