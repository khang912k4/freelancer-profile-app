"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box component="div" sx={{ fontWeight: 700 }}>
            Freelancer Profile
          </Box>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItemButton component={Link} href="/" onClick={onClose}>
            <ListItemText primary="Trang Chủ" />
          </ListItemButton>
          <ListItemButton component={Link} href="/services" onClick={onClose}>
            <ListItemText primary="Dịch vụ" />
          </ListItemButton>
          <ListItemButton component={Link} href="/quote" onClick={onClose}>
            <ListItemText primary="Báo giá" />
          </ListItemButton>
          <ListItemButton component={Link} href="/contact" onClick={onClose}>
            <ListItemText primary="Liên hệ" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
