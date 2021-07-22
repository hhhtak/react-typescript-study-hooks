import { BrowserRouter, Route } from 'react-router-dom'
import Main from './components/Pages/Main'
import About from './components/Pages/About'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App
