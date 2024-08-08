import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

interface IColorSelector {
  initialColor: string;
  label: string;
}

export const ColorSelector: React.FC<IColorSelector> = ({
  initialColor,
  label,
}) => {
  const [value, setValue] = useState(initialColor);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="relative">
      <label className="absolute px-1 bg-black-800 z-10 translate-x-4 -translate-y-3 text-base text-gray-400">
        {label}
      </label>
      <MuiColorInput
        format="hex"
        value={value}
        onChange={handleChange}
        className={`w-52 text-white`}
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
            display: "flex",
            flexDirection: "row-reverse",

            "& button" : {
              borderRadius: "20px"
            },

            "& input" : {
              fontSize: "1.4rem"
            }
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#686868",
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1dbba5",
            },
          },
        }}
      />
    </div>
  );
}