import styles from './RadioButton.module.css'

interface CustomRadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  name: string;
  customStyles?: React.CSSProperties;
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  name,
}) => {
  return (
    <label className={styles.custom_radio_button_label}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        name={name}
        className={styles.custom_radio_button_input}
      />
      <span
        className={`${styles.custom_radio_button_circle} ${checked ? styles.checked : ''}`}
      />
      <p>{label}</p>
    </label>
  );
};