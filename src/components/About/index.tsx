import Logo from "../Logo";

export default function About() {
  return (
    <div
      className={`
        min-h-screen
        w-full
        flex
        flex-col
        mx-auto
        justify-evenly
        items-center
       text-slate-950
        font-castoro-titling
        bg-ceu-horizontal
      `}
      id="about"
    >
      <Logo />
      <p
        className={`
            px-3
            2xl:px-8
            text-xl
            xl:text-2xl
            2xl:text-3xl
            text-center
            tracking-widest
            leading-6
            font-bold
          `}
      >
        O Projeto Surf DBASE nasceu com o propósito de transformar o surf em uma ferramenta de inclusão social, educação e formação cidadã. Mais do que um esporte, o surf é para nós um estilo de vida capaz de gerar oportunidades, disciplina e consciência ambiental para crianças e adolescentes do Cabo de Santo Agostinho.
      </p>
    </div>
  )
}
