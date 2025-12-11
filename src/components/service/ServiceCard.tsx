"use client";
import Box from '@mui/material/Box';
Box;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IService } from "@/types";
import Link from "next/link";
import { formatVND } from "@/utils/formatCurrency";

export default function ServiceCard({ service }: { service: IService }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="160"
        image={service.imageUrl}
        alt={service.title}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {service.shortDescription}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {formatVND(service.price)}
          </Typography>
          <Box display="flex" gap={1}>
            <Button component={Link} href={`/services/${service.slug}`} size="small" variant="contained">
              Xem chi tiết
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
