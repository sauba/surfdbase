
export default function Missao() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        xl:flex
        bg-amber-950/50
        text-red-50
        justify-around
      `}
      id="missao"
    >
      <p className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              pt-8
              xl:pb-4
              2xl:text-8xl
              font-bad-script
      `}>
        Missão
      </p>

      <p
        className={`
            px-3
            pt-4
            pb-10
            xl:text-xl
            2xl:text-2xl
            text-center
            tracking-widest
            leading-6
          `}
      >
        Promover a transformação social de crianças e adolescentes através do surf, oferecendo oportunidades de desenvolvimento físico, mental e social, em conexão com a natureza e a consciência ambiental.
      </p>
    </div>
  )
}
