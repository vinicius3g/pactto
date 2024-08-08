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
        className={styles.input}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        placeholder='Search'
        type="text"
      />

      <button className={styles.button} aria-label="Search">
        <SearchIcon sx={{ color: '#ffffff', fontSize: 38 }} />
      </button>
    </div>
  );
}

export default Input;