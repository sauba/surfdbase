'use client'

export default function Donations() {
  return (
    <div
      className={`
            w-full
            donations
            flex
            flex-col
            xl:grid
            xl:grid-cols-3
            py-8
            bg-blue-950
            text-red-50
            justify-around
            font-castoro-titling
          `}
      id="donations"
    >
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl font-bold text-zinc-100`}>Doações</p>
      </span>
    </div>
  )
}