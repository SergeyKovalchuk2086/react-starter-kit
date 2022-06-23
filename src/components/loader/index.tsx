import React from 'react';
import s from './styles.module.scss'
import stores from "../../store";
import {observer} from "mobx-react-lite";

const Loader = () => {
    const isLoading = stores.loaderStore.isLoading
    if (isLoading) {
        return (
            <div className={s.loader}>
                <div className={s.loader__body}>
                    <div className={s.loader__anim}>
                        <div className={s.lds_dual_ring} />
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default observer(Loader)
