import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [star, end] = value;
  return (
    <Box sx={{ width: 220 }}>
      <span
        style={{ marginLeft: "160px", position: "relative", top: "-15px  " }}
      >
        {star} -
      </span>
      <span style={{ position: "relative", top: "-15px  " }}> {end}</span>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
