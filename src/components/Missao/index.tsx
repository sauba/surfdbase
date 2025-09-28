
export default function Missao() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        xl:flex
        text-zinc-50
        justify-around
      `}
      id="missao"
    >
      <p className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              2xl:text-8xl
              font-bad-script
      `}>
        Missão
      </p>

      <p
        className={`
            px-3
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
