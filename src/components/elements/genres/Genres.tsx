import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

export default function Genres() {
  const genres = useSelector((state: RootState) => state.genres)
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  return (
    <div className="flex flex-grow max-w-7xl gap-5 m-auto">
      {genres.map((genre) => {
        return (
          <button
            key={genre}
            className={`${
              selectedGenre === genre ? 'text-[#F65261]' : ''
            } uppercase`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        )
      })}
    </div>
  )
}
