import AddIcon from '@mui/icons-material/Add';

import styles from './Button.module.css'

interface IButton {
  text: string;
  icon?: boolean;
  handleExec: () => void;
}

const Button: React.FC<IButton> = ({ text, icon, handleExec }) => {
  return (
    <button className={styles.button} onClick={handleExec}>
      {icon && <AddIcon sx={{ color: '#232225', fontSize: 18, marginRight: 1 }} />}
      <span className='font-medium uppercase'>{text}</span>
    </button>
  )
}

export default Button;