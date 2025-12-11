"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "./createEmotionCache";
import { theme } from "./theme";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import viLocale from "date-fns/locale/vi";

interface Props {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children, emotionCache = clientSideEmotionCache }: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={viLocale}>
          <CssBaseline />
          <Box>{children}</Box>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
