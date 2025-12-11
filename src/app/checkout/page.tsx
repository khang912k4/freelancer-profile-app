"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import { useCart } from "@/context/CartContext";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { formatVND } from "@/utils/formatCurrency";

export default function CheckoutPage() {
  const { cartDetails, totalPrice, clearCart } = useCart();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSuccess(true);
    clearCart();
  };

  const serviceFee = Math.round(totalPrice * 0.05);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }} mb={2}>
        Thanh toán
      </Typography>

      <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Thông tin khách hàng</Typography>
              <Box component="form" onSubmit={handleSubmit} mt={2} display="flex" flexDirection="column" gap={2}>
                <TextField required label="Tên" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField required label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Button variant="contained" type="submit">
                  Hoàn tất Thanh toán
                </Button>
              </Box>
              {success && <Alert severity="success" sx={{ mt: 2 }}>Thanh toán thành công. Cảm ơn bạn!</Alert>}
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ width: { xs: "100%", md: 360 } }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tóm tắt đơn hàng</Typography>
              <Box mt={2}>
                {cartDetails.map((cd) => (
                  <Box key={cd.serviceId} display="flex" justifyContent="space-between" mb={1}>
                    <Typography>{cd.service?.title}</Typography>
                    <Typography>{formatVND(cd.subTotal)}</Typography>
                  </Box>
                ))}
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography>Tổng</Typography>
                  <Typography>{formatVND(totalPrice)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Phí dịch vụ</Typography>
                  <Typography>{formatVND(serviceFee)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={1} sx={{ fontWeight: 800 }}>
                  <Typography>Tổng phải thanh toán</Typography>
                  <Typography>{formatVND(totalPrice + serviceFee)}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
