import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://projetosurfdbase.com.br"}>
        <Image
          src={logo}
          width={220}
          height={140}
          alt="Projeto Surf DBASE"
          priority
        />
      </Link>
    </span>
  )
}
