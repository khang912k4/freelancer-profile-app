"use client";

import Box from "@mui/material/Box";
import React from "react";
import { services as mockServices } from "@/lib/mockData";
import ServiceCard from "@/components/service/ServiceCard";
import ServiceFilter from "@/components/service/ServiceFilter";
import SectionTitle from "@/components/common/SectionTitle";
import Typography from "@mui/material/Typography";

export default function ServicesPage() {
  const [search, setSearch] = React.useState<string>("");
  const [minMax, setMinMax] = React.useState<number[]>([0, 10000000]);
  const [countries, setCountries] = React.useState<string[]>([]);

  const availableCountries = Array.from(new Set(mockServices.map((s) => s.country)));

  const filtered = mockServices.filter((s) => {
    const matchesSearch =
      !search || [s.title, s.shortDescription, s.field].join(" ").toLowerCase().includes(search.toLowerCase());
    const withinPrice = s.price >= minMax[0] && s.price <= minMax[1];
    const matchesCountry = countries.length === 0 || countries.includes(s.country);
    return matchesSearch && withinPrice && matchesCountry;
  });

  const [page, setPage] = React.useState(1);
  const perPage = 6;
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 4 }}>
      <SectionTitle title="Danh sách dịch vụ" subtitle="Tìm kiếm và lọc dịch vụ bạn cần" />
      <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <ServiceFilter
            search={search}
            setSearch={setSearch}
            minMax={minMax}
            setMinMax={setMinMax}
            countries={countries}
            setCountries={setCountries}
            availableCountries={availableCountries}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "75%" } }}>
          <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(3,1fr)" }} gap={2}>
            {pageItems.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </Box>

          <Box display="flex" justifyContent="center" gap={1} mt={3}>
            <Typography component="button" onClick={() => setPage(Math.max(1, page - 1))} sx={{ cursor: "pointer" }}>
              Trước
            </Typography>
            <Typography>
              {page} / {pages}
            </Typography>
            <Typography component="button" onClick={() => setPage(Math.min(pages, page + 1))} sx={{ cursor: "pointer" }}>
              Sau
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
