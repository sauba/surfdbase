
export default function Visao() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        xl:flex
        py-4
        text-zinc-50
        justify-around
      `}
      id="visao"
    >
      <p className={`
              text-center
              text-3xl
              md:text-4xl
              xl:text-6xl
              2xl:text-8xl
              font-bad-script
      `}>
        Visão
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
        Ser referência nacional em projetos socioesportivos, formando cidadãos saudáveis, conscientes e disciplinados, além de revelar atletas para o cenário do surf nacional e internacional.
      </p>
    </div>
  )
}
