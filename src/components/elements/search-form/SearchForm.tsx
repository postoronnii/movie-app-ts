type SearchFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: (value: string) => void
  value: string
}

export default function SearchForm({
  onChange,
  onSearch,
  value,
}: SearchFormProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        id="search-input"
        placeholder="What do you want to watch?"
        className="px-2 w-full lg:w-[713px] md:w-96 h-14 bg-gray-800 bg-opacity-60 rounded-md text-2xl font-extralight text-white"
        defaultValue={value}
        onChange={onChange}
      />
      <button
        id="search-btn"
        className="w-56 h-14 bg-red-600 rounded-md text-white text-xl"
        onClick={() => onSearch(value)}
      >
        SEARCH
      </button>
    </div>
  )
}
