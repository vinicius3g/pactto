import AddIcon from '@mui/icons-material/Add';

import styles from './Button.module.css'

interface IButton {
  text: string;
  icon?: boolean;
  color?: 'primary' | 'secondary';
  handleExec: () => void;
}

const Button: React.FC<IButton> = ({ text, icon, color = 'primary', handleExec }) => {
  const colorSelect = color === 'primary' ? styles.primary : styles.secondary

  return (
    <button className={`${styles.button} ${colorSelect}`} onClick={handleExec}>
      {icon && <AddIcon sx={{ color: '#232225', fontSize: 18, marginRight: 1 }} />}
      <span className='font-medium uppercase'>{text}</span>
    </button>
  )
}

export default Button;