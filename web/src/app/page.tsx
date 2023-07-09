import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center gap-7 h-screen font-bold text-3xl ">

        <Link className='hover:text-green-dark' href="/login">Login</Link>
        <Link className='hover:text-green-dark' href='/dashboard'>Dashboard</Link>

      </div>
    </>
  )
}
