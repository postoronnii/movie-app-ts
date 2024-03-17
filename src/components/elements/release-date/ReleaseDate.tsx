import { useState } from 'react'

const arr = ['Release Date', 'Title']

export default function ReleaseDate({ triangle }: { triangle: string }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(arr[0])

  return (
    <div className="flex flex-col">
      <button
        className="flex gap-2 items-center relative uppercase"
        onClick={() => setOpen((prop) => !prop)}
      >
        {selected}
        <img src={triangle} alt="triangle" />
      </button>
      {open && (
        <ul className="bg-[#424242] absolute items-start w-40 gap-3">
          {arr.map((i) => {
            return (
              <li
                className="px-4 py-2 text-white hover:bg-[#F65261]"
                key={i}
                onClick={() => {
                  setSelected(i)
                  setOpen(false)
                }}
              >
                {i}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
