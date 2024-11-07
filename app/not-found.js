import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='text-center text-white bg-gray-800 '>
      <div className='flex flex-col justify-center items-center min-h-screen text-center text-white'>
        <Image alt='404' src={"/notfound.png"} width={500} height={500} />
        <Link href="/" className='text-black hover:underline bg-white rounded-xl px-3 py-2 text-sm mt-8'>Return Home</Link>
      </div>
    </div>
  )
}