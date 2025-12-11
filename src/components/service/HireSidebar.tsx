"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { IService } from "@/types";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function HireSidebar({ service }: { service: IService }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [guests, setGuests] = React.useState<number>(1);
  const [selectedField, setSelectedField] = React.useState<string>(service.field || "");
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <Card sx={{ position: { md: "sticky" }, top: 90 }}>
      <CardContent>
        <Typography variant="h6" mb={1}>
          {service.title}
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }} mb={2}>
          {new Intl.NumberFormat("vi-VN").format(service.price)} ₫
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Số khách"
            type="number"
            inputProps={{ min: 1 }}
            value={guests}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value)))}
          />

          <TextField
            select
            label="Chọn lĩnh vực"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <MenuItem value="Thiết kế">Thiết kế</MenuItem>
            <MenuItem value="Lập trình">Lập trình</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Viết lách">Viết lách</MenuItem>
            <MenuItem value="Multimedia">Multimedia</MenuItem>
            <MenuItem value="IT & Hệ thống">IT & Hệ thống</MenuItem>
          </TextField>

          <DatePicker
            value={date}
            onChange={(d) => setDate(d)}
            slotProps={{ textField: { label: "Ngày dự kiến" } }}
          />

          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                addToCart(service.id, guests, selectedField, date ? date.toISOString() : undefined);
              }}
            >
              Thêm vào Giỏ hàng
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                addToCart(service.id, guests, selectedField, date ? date.toISOString() : undefined);
                router.push("/cart");
              }}
            >
              Thuê ngay
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
