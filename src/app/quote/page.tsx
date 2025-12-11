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

export default function QuotePage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [project, setProject] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSent(true);
    setName(""); setEmail(""); setProject("");
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }} mb={2}>
        Yêu cầu báo giá
      </Typography>

      <Card>
        <CardContent>
          <Box component="form" onSubmit={submit} display="flex" flexDirection="column" gap={2}>
            <TextField required label="Tên" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField required label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField required label="Mô tả dự án" multiline minRows={4} value={project} onChange={(e) => setProject(e.target.value)} />
            <Button type="submit" variant="contained">Gửi yêu cầu</Button>
            {sent && <Alert severity="success">Yêu cầu báo giá đã được gửi. Chúng tôi sẽ liên hệ trong vòng 24 giờ.</Alert>}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
