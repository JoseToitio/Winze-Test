import Link from "next/link";

export default function Navegador(props) {
  return (
    <Link href={props.destino}>
      {props.nome}
    </Link>
  )
}