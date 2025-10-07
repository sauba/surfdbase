import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

const animation = { duration: 80000, easing: (t: number) => t }

export default function KeenSliderAutoAtletas() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/messias.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Messias</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade: ?? anos</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito: Enseadas dos Corais</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos: Pipeline</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide2">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/paulinho.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Paulinho</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide3">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/yuri.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Yuri</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide4">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/nicolas.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nicolas</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide5">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/jiskjr.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome: 05</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide6">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/ryan.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome: Ryan</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos: ??</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide7">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/joao.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>João</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito: ??</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide8">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome: 08</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide9">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome: 09</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Idade:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Base:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Apoio|Patrocinio:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Pico Favorito:</span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Viagem dos Sonhos:</span>
          </div>
        </span>
      </div>
      <div className="keen-slider__slide number-slide10">
        <span className={`w-full h-96 flex-col xl:flex text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4 bg-sky-500/80`}>
          <Image src={`/surfer.svg`} width={180} height={180} alt="" className={`mx-auto hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-lg xl:text-xl 2xl:text-2xl font-pt-mono text-zinc-100`}>Nome: 10</span>
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
