import axios from '../../axios'
import { useEffect, useState } from 'react'
import { requests } from '../../request'
import './Banner.css'

type movieProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
      return request
    }
    fetchData()
  }, [])

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h2 className="bannerDescription">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="bannerFadeButton" />
    </header>
  )

  function truncate(str: any, n: number) {
    if (!str === undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }
}
