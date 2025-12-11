import Box from '@mui/material/Box';
Box;

import "./globals.css";
import React from "react";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Freelancer Profile",
  description: "Nền tảng kết nối freelancer và khách hàng"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeRegistry>
          <CartProvider>
            <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <Header />
              <Box component="main" sx={{ flex: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </CartProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
