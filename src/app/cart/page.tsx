"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import { useCart } from "@/context/CartContext";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { formatVND } from "@/utils/formatCurrency";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartDetails, removeFromCart, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const serviceFee = Math.round(totalPrice * 0.05);

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", px: 2, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }} mb={2}>
        Giỏ hàng
      </Typography>

      {cartDetails.length === 0 ? (
        <Typography>Giỏ hàng trống.</Typography>
      ) : (
        <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
          <Box sx={{ flex: 2 }}>
            {cartDetails.map((cd) => (
              <Card key={cd.serviceId} sx={{ mb: 2 }}>
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <Box component="img" src={cd.service?.imageUrl} alt={cd.service?.title} sx={{ width: 120, borderRadius: 1 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">{cd.service?.title}</Typography>
                    <Typography variant="body2">Lĩnh vực: {cd.selectedField || cd.service?.field}</Typography>
                    <Typography variant="body2">Ngày: {cd.date ? new Date(cd.date).toLocaleDateString() : "-"}</Typography>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <TextField
                        label="Số khách"
                        type="number"
                        value={cd.guests}
                        InputProps={{ inputProps: { min: 1 } }}
                        onChange={(e) => {
                          // edit guests not implemented here
                        }}
                        size="small"
                        sx={{ width: 120 }}
                      />
                      <Typography sx={{ ml: 2 }}>
                        Tạm tính: {formatVND(cd.subTotal)}
                      </Typography>
                      <IconButton onClick={() => removeFromCart(cd.serviceId)} aria-label="remove">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ width: { xs: "100%", md: 360 } }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Tóm tắt đơn hàng</Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography>Tổng tiền dịch vụ</Typography>
                  <Typography>{formatVND(totalPrice)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Phí dịch vụ</Typography>
                  <Typography>{formatVND(serviceFee)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} sx={{ fontWeight: 800 }}>
                  <Typography>Tổng thanh toán</Typography>
                  <Typography>{formatVND(totalPrice + serviceFee)}</Typography>
                </Box>

                <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => router.push("/checkout")}>
                  Tiến hành Thanh toán
                </Button>

                <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={() => clearCart()}>
                  Xóa giỏ hàng
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
}
