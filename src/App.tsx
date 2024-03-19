import { Provider } from 'react-redux'
import { store } from './app/store'
import Home from './components/main/home/Home'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/main/movie/Movie'

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </Provider>
  )
}
