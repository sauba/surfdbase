'use client'

import Image from "next/image";

export default function AtletaCard() {
  return (
    <div className={`
        w-full
        atletacard
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="atletacard">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl font-bold text-zinc-100`}>Nossos Atletas</p>
      </span>

      <div className={`w-full p-2 grid grid-cols-2 lg:grid-cols-4 gap-1`}>
        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>

        <span className={`w-full h-96 flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
    </div>
  )
}