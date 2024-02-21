import Image from "next/image"
import Link from "next/link"

export default function Disciplinas({files}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.src} className="relative">
          <Link href={file.pdf}>
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={file.image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              width="600" height="600"
              className=""
            />
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
