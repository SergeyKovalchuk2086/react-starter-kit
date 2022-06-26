import { observer } from 'mobx-react-lite'
import s from "./styles.module.scss";

const BaseInput = (props: any) => {
  return (
      <div className={s.input}>
        <label htmlFor={props.htmlParams.name}>{props.htmlParams.name}</label>
        <input
            type={props.htmlParams.type}
            name={props.htmlParams.name}
            onChange={props.options.handleChange}
            onBlur={props.options.handleBlur}
            value={props.options.values[props.htmlParams.name]}
        />
      </div>
  )
}

export default observer(BaseInput)
