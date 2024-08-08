import styles from './CheckBoxList.module.css'

interface ICheckboxList {
  items: Array<string>
}

export const CheckBoxList: React.FC<ICheckboxList> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className={styles.checkbox_wrapper} key={item}>
          <input id={`checkbox-${index}`} type="checkbox" />
          <label htmlFor={`checkbox-${index}`}>{item}</label>
        </div>
      ))}
    </>
  )
}
