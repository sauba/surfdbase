import Image from "next/image"

export default function Partners() {
  return (
    <div className={`
        w-full
        partners
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="partners">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl font-bold text-zinc-100`}>Parceiros</p>
      </span>

      <div className={`w-full p-2 grid grid-cols-2 lg:grid-cols-8 gap-1`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/arenabeachclub.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/asc.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/arrisca.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer rounded-3xl`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/dinamicafuncional.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/pizzafamily.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer rounded-full`} priority />
        </span>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfhouseglassing.svg`} width={120} height={120} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/ld.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/jisk.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        </span>
      </div>
    </div>
  )
}