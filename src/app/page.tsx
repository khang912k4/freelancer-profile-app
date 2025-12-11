import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBar from "@/components/common/SearchBar";

export default function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "420px", md: "520px" },
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        mb: 5,
      }}
    >
      {/* Hero Image */}
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80"
        alt="Hero background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />

      {/* Overlay làm tối ảnh */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 2,
            fontSize: { xs: "28px", md: "52px" },
            maxWidth: "850px",
          }}
        >
          Tìm freelancer phù hợp cho dự án của bạn
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            opacity: 0.9,
            mb: 4,
            maxWidth: "600px",
          }}
        >
          Dịch vụ chất lượng, giá cạnh tranh, hỗ trợ 24/7
        </Typography>

        {/* Search Bar */}
        <Box sx={{ width: "100%", maxWidth: "820px" }}>
          <SearchBar />
        </Box>
      </Box>
    </Box>
  );
}
