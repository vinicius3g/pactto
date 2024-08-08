import { ChangeEvent, FC } from 'react';

interface ISelect {
  readonly label?: string;
  readonly options: string[];
  readonly value?: string;
  readonly onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  readonly customClassname?: string;
}

const Select: FC<ISelect> = ({ label, value, onChange, options, customClassname }) => {
  return (
    <div className="flex flex-col gap-3 w-full min-w-52">
      <label className="text-white text-2xl mb-5" htmlFor="cars">
        {label}
      </label>

      <select
        className={`w-80 border rounded border-gray-400 border-solid bg-black-700 text-white hover:border-white h-20 p-3 ${customClassname}`}
        id="cars"
        name="cars"
        onChange={onChange}
        value={value}
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