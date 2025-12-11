"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

type Props = {
  search: string;
  setSearch: (s: string) => void;
  minMax: number[];
  setMinMax: (v: number[]) => void;
  countries: string[];
  setCountries: (c: string[]) => void;
  availableCountries: string[];
};

export default function ServiceFilter({
  search,
  setSearch,
  minMax,
  setMinMax,
  countries,
  setCountries,
  availableCountries
}: Props) {
  const handleSlider = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) setMinMax(value);
  };

  const toggleCountry = (country: string) => {
    if (countries.includes(country)) {
      setCountries(countries.filter((c) => c !== country));
    } else {
      setCountries([...countries, country]);
    }
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: 1 }}>
      <Typography variant="h6" mb={1}>
        Lọc dịch vụ
      </Typography>

      <TextField
        fullWidth
        label="Lĩnh vực hoặc từ khoá"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle2">Khoảng giá</Typography>
      <Slider
        value={minMax}
        onChange={handleSlider}
        valueLabelDisplay="auto"
        min={0}
        max={10000000}
        step={50000}
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle2">Quốc gia</Typography>
      <FormGroup>
        {availableCountries.map((c) => (
          <FormControlLabel
            key={c}
            control={<Checkbox checked={countries.includes(c)} onChange={() => toggleCountry(c)} />}
            label={c}
          />
        ))}
      </FormGroup>

      <Box mt={2} display="flex" gap={1}>
        <Button variant="contained" fullWidth onClick={() => { setSearch(""); setMinMax([0,10000000]); setCountries([]); }}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}
