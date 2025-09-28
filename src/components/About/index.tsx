import Logo from "../Logo";

export default function About() {
  return (
    <div
      className={`
        w-full
        flex
        flex-col
        mx-auto
        justify-center
        items-center
        bg-blue-400
        to-amber-300
       text-zinc-100
        font-castoro-titling
        pt-16
      `}
      id="about"
    >
      <Logo />
      <p
        className={`
            px-3
            py-10
            2xl:px-8
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
          `}
      >
        O Projeto Surf DBASE nasceu com o propósito de transformar o surf em uma ferramenta de inclusão social, educação e formação cidadã. Mais do que um esporte, o surf é para nós um estilo de vida capaz de gerar oportunidades, disciplina e consciência ambiental para crianças e adolescentes do Cabo de Santo Agostinho.
      </p>
    </div>
  )
}
