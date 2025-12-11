"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export default function SearchBar({
  placeholder = "Tìm dịch vụ, freelancer...",
}: {
  placeholder?: string;
}) {
  const [q, setQ] = React.useState("");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (q.trim()) {
      window.location.href = `/services?q=${encodeURIComponent(q.trim())}`;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={submit}
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        width: "100%",
        maxWidth: "700px",
        mx: "auto",
      }}
    >
      <TextField
        fullWidth
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ opacity: 0.6 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            transition: "0.25s",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 0 2px rgba(25,118,210,0.3)",
            },
          },
        }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          px: 3,
          py: 1.4,
          borderRadius: "12px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "0 2px 10px rgba(25,118,210,0.25)",
          transition: "0.25s",
          "&:hover": {
            boxShadow: "0 4px 14px rgba(25,118,210,0.35)",
          },
        }}
      >
        Tìm
      </Button>
    </Box>
  );
}
