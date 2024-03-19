import triangle from '../../../images/triangle.svg'
import calendar from '../../../images/calendar.svg'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../app/addMovieSlice'
import { openModal } from '../../../app/submitModalSlice'

export default function AddMovieModal() {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleSubmitOpenModal = () => {
    dispatch(closeModal())
    dispatch(openModal())
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-main-dark font-extralight uppercase">
        <div className="flex flex-col p-7 mx-1">
          <button
            className="text-2xl flex justify-end"
            name="close-btn"
            onClick={handleCloseModal}
          >
            X
          </button>
          <h2 className="text-white text-3xl pb-5">Add Movie</h2>
          <div className="flex gap-5">
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Title</p>
              <input
                type="text"
                placeholder="What do you want to watch?"
                className="px-2 w-full lg:w-[500px] h-10 bg-gray-600 bg-opacity-60 text-lg"
              />
            </div>
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Release Date</p>
              <button className="px-2 w-full lg:w-[200px] h-10 bg-gray-600 bg-opacity-60 text-lg flex justify-between text-gray-400 items-center">
                Select Genre <img src={calendar} height={16} width={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Movie URL</p>
              <input
                type="text"
                placeholder="https://"
                className="px-2 w-full lg:w-[500px] h-10 bg-gray-600 bg-opacity-60 text-lg"
              />
            </div>
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Rating</p>
              <input
                type="text"
                placeholder="7.8"
                className="px-2 w-full lg:w-[200px] h-10 bg-gray-600 bg-opacity-60 text-lg "
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Genre</p>
              <button className="px-2 w-full lg:w-[500px] h-10 bg-gray-600 bg-opacity-60 text-lg flex justify-between text-gray-400 items-center">
                Select Genre <img src={triangle} height={16} width={16} />
              </button>
            </div>
            <div className="flex flex-col pb-5">
              <p className="text-red-600 font-light pb-3">Runtime</p>
              <input
                type="text"
                placeholder="minutes"
                className="px-2 w-full lg:w-[200px] h-10 bg-gray-600 bg-opacity-60 text-lg"
              />
            </div>
          </div>
          <div>
            <p className="text-red-600 font-light pb-3">Overview</p>
            <textarea
              placeholder="Movie Description"
              className="px-2 w-full lg:w-[720px] lg:h-[130px] h-10 bg-gray-600 bg-opacity-60 text-lg"
            />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button className="border border-red-600 text-red-600 text-xl px-8 py-2 rounded-sm">
              reset
            </button>
            <button
              className="text-white text-xl bg-red-600 px-8 py-2 rounded-sm"
              onClick={handleSubmitOpenModal}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
