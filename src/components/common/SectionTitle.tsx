import Box from '@mui/material/Box';
Box;

import React from "react";
import Typography from "@mui/material/Typography";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Box mb={2}>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
