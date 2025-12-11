import Box from '@mui/material/Box';
Box;

import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, py: 6, backgroundColor: "#ffffff" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={2}>
          <Box>
            <Typography variant="h6">Freelancer Profile</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Nền tảng kết nối freelancer và khách hàng. Dịch vụ chất lượng, an toàn, hỗ trợ 24/7.
            </Typography>
            <Box display="flex" gap={1} mt={1}>
              <IconButton component={Link} href="#" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton component={Link} href="#" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton component={Link} href="#" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1">Liên hệ</Typography>
            <Typography variant="body2">Địa chỉ: 123 Đường A, Quận B, TP. HCM</Typography>
            <Typography variant="body2">Email: contact@freelancerprofile.vn</Typography>
            <Typography variant="body2">Điện thoại: (+84) 912 345 678</Typography>
          </Box>
        </Box>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2">© {new Date().getFullYear()} Freelancer Profile. Bản quyền thuộc về Freelancer Profile.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
