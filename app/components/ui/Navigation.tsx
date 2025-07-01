import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-rows gap-8">
      <Link href="/cv">CV</Link>
      <a target="blank" href="https://www.goodreads.com/user/show/23976245-charles-cole">Bookshelf</a>
      <a target="blank" href="https://scritticorsari.substack.com/">Blog</a>
      <a href="mailto:charles.sismondi@gmail.com">Contact</a>
    </div>
  )
}