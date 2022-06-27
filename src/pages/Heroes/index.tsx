import { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import DefaultLayout from '../../layouts/defaultLayout'
import HeroCard from '../../components/heroCard'
import BaseSearchInput from '../../components/ui/BaseSerchInput'
import stores from '../../store'
import heroesService from '../../utils/apiServices/heroesService'

import s from './styles.module.scss'

enum PaginationDirection {
  PREV,
  NEXT
}

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL

const Heroes = () => {
  const heroesStore = stores.heroesStore
  const loader = stores.loaderStore

  const [payload, setPayload] = useState({
    page: 1,
    search: ''
  })

  const fetchData = useCallback(async() => {
    try {
      loader.setIsLoading(true)
      const r = await heroesService.getHeroesPage(payload)
      heroesStore.changeHeroesPage(r)
    } catch (error) {
      console.log('error: ', error)
    }
    loader.setIsLoading(false)
  }, [heroesStore, payload, loader])

  useEffect(() => { fetchData() }, [fetchData])

  const changePage = (direction: PaginationDirection) => {
    if (direction === PaginationDirection.PREV && heroesStore.heroesPage.previous) {
      setPayload({ ...payload, page: payload.page - 1 })
    } else if (direction === PaginationDirection.NEXT && heroesStore.heroesPage.next) {
      setPayload({ ...payload, page: payload.page + 1 })
    }
  }

  const getImage = (url: string): string => {
    const id = url.replace(/[^0-9]/g,"")
    if (id) {
      return `${IMAGE_URL}/${id}.jpg`
    }
    return ''
  }

  const handleChangeSearch = useCallback((value: string) => {
    setPayload({ ...payload, search: value, page: 1 })
  }, [setPayload, payload])

  return (
    <DefaultLayout>
      <div className={s.heroes}>
        <h3 className={`${s.heroes__title} pageTitle`}>THE STAR WARS HEROES</h3>
        <BaseSearchInput search={payload.search} setSearch={handleChangeSearch}/>
        <div className={s.heroes__box}>
          {heroesStore.heroesPage?.results?.map(card => {
            const img = getImage(card.url)
            return (
              <HeroCard
                key={card.height + card.name}
                card={card}
                img={img}
              />
            )
          })}
        </div>
        <div>
          <button onClick={() => changePage(PaginationDirection.PREV)}>PREV</button>
          <br/>
          <button onClick={() => changePage(PaginationDirection.NEXT)}>NEXT</button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default observer(Heroes)
