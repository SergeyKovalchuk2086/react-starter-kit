import { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import DefaultLayout from '../../layouts/defaultLayout'
import HeroCard from '../../components/heroCard'
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

  const [page, setPage] = useState(1)

  const fetchData = useCallback(async() => {
    try {
      loader.setIsLoading(true)
      const r = await heroesService.getHeroesPage(page)
      heroesStore.changeHeroesPage(r)
    } catch (error) {
      console.log('error: ', error)
    }
    loader.setIsLoading(false)
  }, [heroesStore, page, loader])

  useEffect(() => { fetchData() }, [fetchData])

  const changePage = (direction: PaginationDirection) => {
    if (direction === PaginationDirection.PREV && heroesStore.heroesPage.previous) {
      setPage(page - 1)
    } else if (direction === PaginationDirection.NEXT && heroesStore.heroesPage.next) {
      setPage(page + 1)
    }
  }

  const getImage = (url: string): string => {
    const id = url.replace(/[^0-9]/g,"")
    if (id) {
      return `${IMAGE_URL}/${id}.jpg`
    }
    return ''
  }

  return (
    <DefaultLayout>
      <div className={s.heroes}>
        <h3 className={`${s.heroes__title} pageTitle`}>THE STAR WARS HEROES</h3>
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
