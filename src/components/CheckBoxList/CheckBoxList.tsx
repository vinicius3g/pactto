import styles from './CheckBoxList.module.css'

interface ICheckboxList {
  items: Array<string>
}

export const CheckBoxList: React.FC<ICheckboxList> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={item} className={styles.checkbox_wrapper}>
          <input type="checkbox" id={`checkbox-${index}`} />
          <label htmlFor={`checkbox-${index}`}>{item}</label>
        </div>
      ))}
    </>
  )
}
