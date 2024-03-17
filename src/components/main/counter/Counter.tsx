import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../app/counterSlice'
import { RootState } from '../../../app/store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const incrementValue = () => {
    dispatch(increment())
  }

  const decrementValue = () => {
    dispatch(decrement())
  }

  return (
    <div className="flex">
      <div className="flex flex-col text-3xl items-center">
        <p className="text-7xl font-bold pb-10" id="count-counter-txt">
          {count}
        </p>
        <div className="flex flex-row gap-3">
          <button
            id="increment-counter-btn"
            onClick={() => incrementValue()}
            className="w-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            +
          </button>
          <button
            id="decrement-counter-btn"
            disabled={count <= 0}
            onClick={() => decrementValue()}
            className={`w-14 bg-transparent ${
              count <= 0
                ? 'cursor-not-allowed text-gray-400 border-gray-300'
                : 'hover:bg-gray-500 hover:text-white hover:border-transparent'
            } text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded`}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
