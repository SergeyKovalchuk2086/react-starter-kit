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

const Heroes = () => {
  const heroesStore = stores.heroesStore
  const [page, setPage] = useState(1)

  const fetchData = useCallback(async() => {
    try {
      const r = await heroesService.getHeroesPage(page)
      heroesStore.changeHeroesPage(r)
    } catch (error) {
      console.log('error: ', error)
    }
  }, [heroesStore, page])

  useEffect(() => { fetchData() }, [fetchData])

  const changePage = (direction: PaginationDirection) => {
    if (direction === PaginationDirection.PREV && heroesStore.heroesPage.previous) {
      setPage(page - 1)
    } else if (direction === PaginationDirection.NEXT && heroesStore.heroesPage.next) {
      setPage(page + 1)
    }
  }

  return (
    <DefaultLayout>
      <div className={s.heroes}>
        <h3 className={`${s.heroes__title} pageTitle`}>THE STAR WARS HEROES</h3>
        <div className={s.heroes__box}>
          {heroesStore.heroesPage?.results?.map((card, id) => {
            return (
              <HeroCard key={card.height + card.name} card={card} />
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
