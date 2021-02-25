import { requests } from './request'
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { Navigation } from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TOP Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentMovies}
        isLargeRow
      />
    </div>
  )
}

export default App
