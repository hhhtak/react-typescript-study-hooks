import { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'

const imageUrl = 'https://image.tmdb.org/t/p/original'

type Props = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  bockdrop_path: string
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && 'posterLarge'}`}
            src={`${imageUrl}${
              isLargeRow ? movie.poster_path : movie.bockdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}
