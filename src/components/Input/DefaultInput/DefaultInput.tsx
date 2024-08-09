import { FC, useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

import styles from '../Gereric.module.css';
import Tooltip from './ToolTip';

interface IDefaultInput {
  readonly label?: string;
  readonly tooltip?: boolean
  readonly placeholder?: string;
  readonly subTitle?: string;
}

const DefaultInput: FC<IDefaultInput> = ({ label, tooltip, placeholder, subTitle }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  }

  return (
    <div className={`${styles.input_wrapper}`}>
      {label ? <label className='text-2xl mt-5 mb-3 text-white font-semibold block' htmlFor="firstName">{label}</label> : null}
      {subTitle ? <span className='text-xl text-gray-400 mb-5 block'>{subTitle}</span> : null}
      
      <div className={styles.general_input}>
        <input
          id="firstName"
          placeholder={placeholder}
        />

        {tooltip ? (
          <button onClick={handleClick}>
            <InfoIcon sx={{ color: '#B8B8B8', fontSize: 15, marginRight: 1 }} />
          </button>
        ) : null}

        {showTooltip ? <Tooltip height={300} width={500} image='/tooltip-quote-author.png' /> : null}
      </div>
    </div>
  )
}

export default DefaultInput;