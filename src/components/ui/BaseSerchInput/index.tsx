import s from './styles.module.scss'

interface IProps {
  search: string,
  setSearch: (arg: string) => void
}

const BaseSearchInput = (props: IProps) => {
  const { search, setSearch } = props

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <div className={s.search}>
      <label htmlFor="">Search by name: </label>
      <input type="text" value={search} onChange={handleChange}/>
    </div>
  )
}

export default BaseSearchInput
