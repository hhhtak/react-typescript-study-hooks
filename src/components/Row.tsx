import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import { API_KEY } from '../request'
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

type Options = {
  height: string
  width: string
  playerVars: {
    autoplay: 0 | 1 | undefined
  }
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const options: Options = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 },
  }

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      let videoUrl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`,
      )
      setTrailerUrl(videoUrl.data.results[0]?.key)
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowPosters">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`rowPoster ${isLargeRow && 'rowPosterLarge'}`}
            src={`${imageUrl}${
              isLargeRow ? movie.poster_path : movie.bockdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  )
}
