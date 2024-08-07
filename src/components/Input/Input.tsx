import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Input.module.css'

interface IInput {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({ handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${styles.input_container} ${isFocused ? styles.input_containerFocused : ''}`}>
      <input
        type="text"
        className={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        placeholder='Search'
      />

      <button className={styles.button}>
        <SearchIcon sx={{ color: '#ffffff', fontSize: 38 }} />
      </button>
    </div>
  );
}

export default Input;