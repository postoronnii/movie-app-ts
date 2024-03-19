import SortControl from '../../elements/sort-control/SortControl'
import Genres from '../../elements/genres/Genres'

export default function Menu() {
  return (
    <div className="flex flex-col lg:px-20 pt-4">
      <div className="flex justify-between font-extralight text-white text-xl">
        <Genres />
        <SortControl />
      </div>
      <div className="bg-[#888888] h-[1px] mt-3" />
    </div>
  )
}
