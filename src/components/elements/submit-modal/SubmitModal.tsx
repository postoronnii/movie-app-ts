import submited from '../../../images/submited.svg'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../app/submitModalSlice'

export default function SubmitModal() {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-main-dark font-extralight w-[500px] h-[300px] flex flex-col justify-between">
        <div className="flex flex-col p-7 mx-1">
          <button
            className="text-2xl flex justify-end"
            name="close-btn"
            onClick={handleCloseModal}
          >
            X
          </button>
          <div className="flex justify-center items-center">
            <img src={submited} height={80} width={80} />
          </div>

          <div className="flex justify-center text-4xl p-5 uppercase">
            Congratulations !
          </div>
          <div className="flex justify-center items-center">
            The movie has been added to database succesfully
          </div>
        </div>
      </div>
    </div>
  )
}
