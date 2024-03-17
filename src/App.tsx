import { Provider } from 'react-redux'
import Counter from './components/main/counter/Counter'
import Footer from './components/main/footer/Footer'
import Header from './components/main/header/Header'
import Menu from './components/main/menu/Menu'
import Movies from './components/main/movies/Movies'
import { store } from './app/store'

const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col bg-main-gray">
        <Header />
        <main className="bg-main-dark">
          <div className="bg-main-gray h-2"></div>
          <Menu genres={movies} />
          <Movies />
        </main>
        <Footer />
      </div>
      <div className="flex justify-center items-center pb-5">
        <Counter />
      </div>
    </Provider>
  )
}
