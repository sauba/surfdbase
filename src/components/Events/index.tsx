import Image from "next/image"

export default function Events() {
  return (
    <div className={`
        w-full
        events
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="events">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl font-bold text-zinc-100`}>Eventos</p>
      </span>

      <div className={`w-full p-2 grid grid-cols-1 lg:grid-cols-5 justify-center items-center gap-1`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none px-2 py-4 bg-sky-500/80`}>
          <Image src={`/evento001.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Evento Tal...</span>

          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none px-2 py-4 bg-sky-500/80`}>
          <Image src={`/evento002.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Evento Tal...</span>

          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none px-2 py-4 bg-sky-500/80`}>
          <Image src={`/evento001.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Evento Tal...</span>

          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none px-2 py-4 bg-sky-500/80`}>
          <Image src={`/evento002.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Evento Tal...</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none px-2 py-4 bg-sky-500/80`}>
          <Image src={`/evento001.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Evento Tal...</span>
          </div>
        </span>
      </div>
    </div>
  )
}