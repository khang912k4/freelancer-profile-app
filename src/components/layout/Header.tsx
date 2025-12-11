"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import MobileDrawer from "./MobileDrawer";
import Button from "@mui/material/Button";

export default function Header() {
  const { cart } = useCart();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const itemCount = cart.reduce((s, it) => s + it.guests, 0);

  return (
    <>
      <AppBar position="sticky" elevation={2} color="default">
        <Toolbar>
          <Box display="flex" alignItems="center" flex={1}>
            <Box component={Link} href="/" sx={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Freelancer Profile
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
            <Button component={Link} href="/" color={pathname === "/" ? "primary" : "inherit"}>
              Trang Chủ
            </Button>
            <Button
              component={Link}
              href="/services"
              color={pathname?.startsWith("/services") ? "primary" : "inherit"}
            >
              Dịch vụ
            </Button>
            <Button component={Link} href="/quote" color={pathname === "/quote" ? "primary" : "inherit"}>
              Báo giá
            </Button>
            <Button component={Link} href="/contact" color={pathname === "/contact" ? "primary" : "inherit"}>
              Liên hệ
            </Button>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              size="large"
              aria-label="cart"
              onClick={() => router.push("/cart")}
              color="inherit"
            >
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              sx={{ display: { md: "none" } }}
              color="inherit"
              onClick={() => setOpen(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
