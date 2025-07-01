import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="p-8 flex flex-rows justify-between">
      <Link href="/" className="text-2xl">Charles Sismondi</Link>
      <div className="">
        <Navigation />
      </div>
    </div>
  )
}