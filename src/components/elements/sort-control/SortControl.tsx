import ReleaseDate from '../release-date/ReleaseDate'
import triangle from '../../../images/triangle.svg'

export default function SortControl() {
  return (
    <div className="flex gap-5">
      <p>SORT BY</p>
      <ReleaseDate triangle={triangle} />
    </div>
  )
}
