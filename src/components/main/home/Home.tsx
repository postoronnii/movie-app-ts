import Header from '../header/Header'
import Menu from '../menu/Menu'
import Movies from '../movies/Movies'
import Footer from '../footer/Footer'
import Counter from '../counter/Counter'
import AddMovie from '../../elements/add-movie-modal/AddMovieModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import SubmitModal from '../../elements/submit-modal/SubmitModal'

export default function () {
  const modalAddMovie = useSelector((state: RootState) => state.addMovie.value)
  const modalSubmit = useSelector((state: RootState) => state.submitModal.value)
  return (
    <div>
      {modalAddMovie && (
        <div className="absolute z-10 text-white flex justify-center items-center inset-0">
          <AddMovie />
        </div>
      )}
      {modalSubmit && (
        <div className="absolute z-10 text-white flex justify-center items-center inset-0">
          <SubmitModal />
        </div>
      )}
      <div className="flex flex-col bg-main-gray">
        <Header />
        <main className="bg-main-dark">
          <div className="bg-main-gray h-2"></div>
          <Menu />
          <Movies />
        </main>
        <Footer />
      </div>
      <div className="flex justify-center items-center pb-5">
        <Counter />
      </div>
    </div>
  )
}
