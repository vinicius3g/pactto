import { FC } from 'react';

import styles from '../Gereric.module.css';

interface ITextArea {
  readonly label?: string;
  readonly placeholder?: string;
}

const TextArea: FC<ITextArea> = ({ label, placeholder }) => {
  return (
    <div className={styles.input_wrapper}>
      {label ? <label className='text-2xl mt-5 mb-3 text-white font-semibold block' htmlFor="firstName">{label}</label> : null}
      <textarea
        className={styles.general_input}
        id="firstName"
        // {...register("firstName", { required: "First name is required" })}
        placeholder={placeholder}
      />
      {/* {errors.firstName && <p className="error">{errors.firstName.message}</p>} */}
    </div>
  )
}

export default TextArea;