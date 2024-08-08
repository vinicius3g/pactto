import Box from "@mui/material/Box";
import { Slider as MuiSlider } from "@mui/material";
import { FC, useState } from "react";

interface ISlider {
  readonly label?: string;
}

export const Slider: FC<ISlider> = ({ label }) => {
  const [value, setValue] = useState(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box className="flex items-center gap-5 text-white">
      <p className="text-2xl">{label}</p>
      <MuiSlider
        aria-label="Default"
        defaultValue={value}
        onChange={handleChange}
        sx={{
          color: '#1dbba5',
          width: 160
        }}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}