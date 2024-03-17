type Movie = {
  title: string
  poster_path: string
  year: number
  genres: string[]
}

export default function MovieTitle({
  title,
  poster_path,
  year,
  genres,
}: Movie) {
  return (
    <div className="flex flex-col bg-[#232323] w-[322px] text-gray-300 font-extralight pt-5">
      <img
        src={poster_path}
        alt={title}
        className="w-full h-[455px] object-cover rounded-t-md pb-4"
      />
      <div className="flex justify-between items-center pb-2">
        <h3 className="text-xl ">{title}</h3>
        <p className="border py-1 px-3 border-gray-500">{year}</p>
      </div>
      <p className="text-sm text-gray-400">{genres}</p>
    </div>
  )
}
