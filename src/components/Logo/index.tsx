import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://www.surfdbase.com.br"}>
        <Image
          src={logo}
          width={320}
          height={160}
          alt="Projeto Surf DBASE"
          priority
        />
      </Link>
    </span>
  )
}
