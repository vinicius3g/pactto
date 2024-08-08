import { ChangeEvent, FC } from 'react';

interface ISelect {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  customClassname?: string;
}

const Select: FC<ISelect> = ({ label, value, onChange, options, customClassname }) => {
  return (
    <div className="flex flex-col gap-3 w-full min-w-52">
      <label htmlFor="cars" className="text-white text-2xl mb-5">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        name="cars"
        id="cars"
        className={`w-80 border rounded border-gray-400 border-solid bg-black-700 text-white hover:border-white h-20 p-3 ${customClassname}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;