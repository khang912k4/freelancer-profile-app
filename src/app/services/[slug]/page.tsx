import Box from '@mui/material/Box';
Box;

import React from "react";
import { services } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/common/SectionTitle";
import HireSidebar from "@/components/service/HireSidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 4 }}>
      <Box display={{ xs: "block", md: "flex" }} gap={2}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }} mb={1}>
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Thời gian: {service.deliveryDays} ngày • Lĩnh vực: {service.field} • Quốc gia: {service.country} • Đánh giá:{" "}
            {service.rating}
          </Typography>

          <Box mb={2} display="flex" gap={1} flexDirection={{ xs: "column", md: "row" }}>
            <img src={service.imageUrl} alt={service.title} style={{ width: "100%", borderRadius: 8 }} />
            {service.gallery.length > 0 && (
              <Box sx={{ display: "flex", gap: 1, flexDirection: "column", width: 260 }}>
                {service.gallery.slice(0, 3).map((g, idx) => (
                  <img key={idx} src={g} alt={`${service.title}-${idx}`} style={{ width: "100%", borderRadius: 6 }} />
                ))}
              </Box>
            )}
          </Box>

          <SectionTitle title="Mô tả chi tiết" />
          <Card>
            <CardContent>
              <Typography variant="body1" paragraph>
                {service.description}
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Điểm nổi bật</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>- Chất lượng chuyên nghiệp</Typography>
                  <Typography>- Giao hàng đúng hạn</Typography>
                  <Typography>- Hỗ trợ sau bán hàng</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Lĩnh vực dịch vụ</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{service.field}</Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          <Box mt={2}>
            <SectionTitle title="Đánh giá" />
            {service.reviews.length === 0 ? (
              <Typography>Chưa có đánh giá.</Typography>
            ) : (
              service.reviews.map((r) => (
                <Card key={r.id} sx={{ mb: 1 }}>
                  <CardContent>
                    <Typography sx={{ fontWeight: 700 }}>{r.author}</Typography>
                    <Typography variant="body2">{r.content}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {r.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Box>
        </Box>

        <Box sx={{ width: { xs: "100%", md: 340 } }}>
          <HireSidebar service={service} />
        </Box>
      </Box>
    </Box>
  );
}
