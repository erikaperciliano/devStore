import Image from "next/image";

export default function Slug(){
  return(
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className=""
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
      />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">Never Stop Learning Sweatshirt</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">Sweatshirt made with 88% cotton and 12% polyester.</p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-700 px-5 py-2.5 font-semibold">$129</span>
          <span className="text-sm text-zinc-400">In 12 interest-free installments of $10.75</span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Sizes</span>

          <div className="flex gap-2">
            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">S</button>
            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">M</button>
            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">L</button>
            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">XL</button>
            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">XXL</button>
          </div>
        </div>

        <button type="button" className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">Add to Cart</button>
      </div>
    </div>
  )
}
