import Link from "next/link";
import Image from "next/image";

export default async function  Search(){

  return (
    <div className="flex flex-col gap-4">
      <p>
        Results for: <span className="font-semibold">sweatshirt</span>

        <div className="grid grid-cols-3 gap-6">
          <Link
            href={`/product/moletom-never-stop-learning`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src="/moletom-never-stop-learning.png"
              className="group-hover:scale-105 transition-transform duration-500"
              width={480}
              height={480}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinx-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">Moletom Never Stop Learning</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-700 px-4 font-semibold">{Number(129).toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
            </div>
          </Link>
        </div>
      </p>
    </div>
  )
}
