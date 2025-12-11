"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email.includes("@")) {
      alert("Email không hợp lệ");
      return;
    }
    setSent(true);
    setName(""); setEmail(""); setSubject(""); setMessage("");
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }} mb={2}>
        Liên hệ
      </Typography>

      <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Box component="form" onSubmit={submit} display="flex" flexDirection="column" gap={2}>
                <TextField required label="Tên" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField required label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Chủ đề" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <TextField label="Nội dung" value={message} onChange={(e) => setMessage(e.target.value)} multiline minRows={4} />
                <Button type="submit" variant="contained">Gửi</Button>
                {sent && <Alert severity="success">Tin nhắn đã gửi. Cảm ơn bạn!</Alert>}
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ width: { xs: "100%", md: 360 } }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Thông tin liên hệ</Typography>
              <Typography>Địa chỉ: 123 Đường A, Quận B, TP. HCM</Typography>
              <Typography>Điện thoại: (+84) 912 345 678</Typography>
              <Typography>Email: contact@freelancerprofile.vn</Typography>
              <Box mt={2}>
                <Typography variant="subtitle2">Văn phòng</Typography>
                <Box sx={{ height: 180, backgroundColor: "#f0f0f0", borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Bản đồ (giả lập)
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
