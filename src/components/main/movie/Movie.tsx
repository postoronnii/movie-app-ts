import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import searchBtn from '../../../images/searchBtn.svg'
import Footer from '../footer/Footer'

type Movie = {
  id: number
  vote_average: number
  title: string
  poster_path: string
  release_date: string
  genres: string[]
  runtime: number
  overview: string
}

export default function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Movie>(
          `http://localhost:4000/movies/${id}`,
        )
        setMovie(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const genres_edited = movie?.genres.join(', ')
  const runtime_edited = movie?.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
    : ''

  return (
    <div>
      <div className="flex flex-col bg-main-dark lg:px-20 py-8">
        <div className="flex items-center justify-between pb-8">
          <nav className="text-red-600 text-2xl font-bold">
            <Link to="/">
              Netflix<span className="font-light">Roulette</span>
            </Link>
          </nav>
          <img src={searchBtn} />
        </div>
        <div>
          {movie && (
            <div className="flex gap-20 text-white font-extralight">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-[322px] h-[455px] object-cover rounded-t-md pb-4"
              />
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex gap-5 items-center">
                  <h1 className="text-5xl uppercase">{movie.title}</h1>
                  <h2 className="text-3xl border rounded-full p-3">
                    {movie.vote_average}
                  </h2>
                </div>
                <div className="py-1 text-gray-400">{genres_edited}</div>
                <div className="flex gap-10 text-red-600 text-xl py-5">
                  <p>{movie.release_date}</p>
                  <p>{runtime_edited}</p>
                </div>
                <p className="text-gray-400">{movie.overview}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
