import { SetStateAction, useState } from 'react'
// import bgImage from '/src/images/bg.png'
import SearchForm from '../../elements/search-form/SearchForm'

export default function Header() {
  const [value, setValue] = useState('')

  const onChange = (e: {
    preventDefault: () => void
    target: { value: SetStateAction<string> }
  }) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const onSearch = (value: string) => {
    console.log(value)
  }

  return (
    <header>
      <div className="absolute h-96 w-screen bg-cover bg-center backdrop-blur bg-custom-image" />
      <div className="flex relative flex-col h-96 justify-between pb-28">
        <div className="flex w-screen items-center justify-between lg:px-20 py-8 px-5">
          <p className="text-red-600 text-2xl font-bold">
            Netflix<span className="font-light">Roulette</span>
          </p>
          <button className="text-red-600 text-xl bg-gray-600 px-3 py-2 bg-opacity-60">
            + ADD MOVIE
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-start gap-10">
            <p className="text-3xl text-white font-extralight text-left">
              FIND YOUR MOVIE
            </p>
            <SearchForm onSearch={onSearch} onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </header>
  )
}
