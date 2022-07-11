import { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import DefaultLayout from '../../layouts/defaultLayout'
import HeroCard from '../../components/heroCard'
import BaseSearchInput from '../../components/ui/BaseSerchInput'
import stores from '../../store'
import heroesService from '../../utils/apiServices/heroesService'

import s from './styles.module.scss'
import { ModalKeY } from '../../store/Modals/modals'
import { getIdFromUrl, getImageById } from '../../utils/functions/converters'
import { Unit } from '../../utils/functions'

enum PaginationDirection {
  PREV,
  NEXT
}

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
    return getImageById(Unit.characters, getIdFromUrl(url))
  }

  const handleChangeSearch = useCallback((value: string) => {
    setPayload({ ...payload, search: value, page: 1 })
  }, [setPayload, payload])

  const modal = stores.modalsStore

  const getPlanet = async (url: string) => {
    loader.setIsLoading(true)
    try {
      const planet = await heroesService.getPlanetByHero(getIdFromUrl(url))
      modal.showModal({
        key: ModalKeY.Planet,
        title: planet.name,
        item: planet
      })
    } catch (error) {
      console.log('🚀 ~ file: index.tsx ~ line 32 ~ getPlanet ~ error', error)
    } finally  {
      loader.setIsLoading(false)
    }
  }

  return (
    <DefaultLayout>
      <div className={s.heroes}>
        <h3 className={`${s.heroes__title} pageTitle`}>THE STAR WARS HEROES</h3>
        <BaseSearchInput search={payload.search} setSearch={handleChangeSearch}/>
        <div className={s.heroes__box}>
          {heroesStore.heroesPage?.results?.map(card => {
            return (
              <HeroCard
                key={card.height + card.name}
                card={card}
                img={getImage(card.url)}
                onClick={() => getPlanet(card.homeworld)}
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
