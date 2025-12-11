import Box from '@mui/material/Box';
Box;

import { IService } from "@/types";

export const services: IService[] = [
  {
    id: "s1",
    title: "Thiết kế logo chuyên nghiệp",
    slug: "thiet-ke-logo-chuyen-nghiep",
    shortDescription: "Logo ấn tượng, độc đáo cho thương hiệu của bạn",
    description:
      "Mình cung cấp dịch vụ thiết kế logo với concept độc đáo, đảm bảo dễ nhận diện. Bao gồm 3 phiên bản, file AI, SVG, PNG, JPG. Hỗ trợ chỉnh sửa 2 lần.",
    price: 1200000,
    rating: 4.9,
    deliveryDays: 3,
    field: "Thiết kế",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200&q=80&auto=format&fit=crop"
    ],
    reviews: [
      {
        id: "r1",
        author: "Nguyễn An",
        content: "Logo rất đẹp, đúng ý, giao hàng nhanh.",
        rating: 5,
        date: "2024-11-02"
      },
      {
        id: "r2",
        author: "Trần Bảo",
        content: "Tư vấn nhiệt tình và có tâm.",
        rating: 5,
        date: "2024-12-01"
      }
    ]
  },
  {
    id: "s2",
    title: "Xây dựng website doanh nghiệp",
    slug: "xay-dung-website-doanh-nghiep",
    shortDescription: "Website responsive, SEO cơ bản, nhiều tính năng",
    description:
      "Phát triển website doanh nghiệp bằng Next.js, responsive, tích hợp biểu mẫu, tối ưu SEO cơ bản và performance.",
    price: 5000000,
    rating: 4.8,
    deliveryDays: 7,
    field: "Lập trình",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80&auto=format&fit=crop"
    ],
    reviews: [
      {
        id: "r3",
        author: "Công ty ABC",
        content: "Website đẹp, dễ dùng, team hỗ trợ tốt.",
        rating: 5,
        date: "2025-01-15"
      }
    ]
  },
  {
    id: "s3",
    title: "Quản trị mạng & VPS",
    slug: "quan-tri-mang-vps",
    shortDescription: "Cài đặt server, cấu hình bảo mật, backup",
    description:
      "Dịch vụ quản trị hệ thống, cài đặt và cấu hình VPS, tối ưu bảo mật, backup tự động và giám sát.",
    price: 2000000,
    rating: 4.7,
    deliveryDays: 5,
    field: "IT & Hệ thống",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80&auto=format&fit=crop"
    ],
    reviews: []
  },
  {
    id: "s4",
    title: "Viết bài chuẩn SEO",
    slug: "viet-bai-chuan-seo",
    shortDescription: "Bài viết thu hút, ngôn ngữ tự nhiên, chuẩn SEO",
    description:
      "Viết bài chuẩn SEO theo từ khóa, độ dài theo yêu cầu, tối ưu heading, meta description và internal link.",
    price: 300000,
    rating: 4.6,
    deliveryDays: 2,
    field: "Viết lách",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop",
    gallery: [],
    reviews: [
      {
        id: "r4",
        author: "Minh Hằng",
        content: "Bài viết chất lượng, lên top nhanh hơn mong đợi.",
        rating: 5,
        date: "2024-09-10"
      }
    ]
  },
  {
    id: "s5",
    title: "Chỉnh sửa video chuyên nghiệp",
    slug: "chinh-sua-video-chuyen-nghiep",
    shortDescription: "Dựng video, color grading, hiệu ứng, âm thanh",
    description:
      "Dịch vụ dựng và chỉnh sửa video, hỗ trợ color grading, motion graphics cơ bản, xuất file chất lượng cao.",
    price: 1500000,
    rating: 4.85,
    deliveryDays: 4,
    field: "Multimedia",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop",
    gallery: [],
    reviews: []
  },
  {
    id: "s6",
    title: "Tối ưu quảng cáo Google Ads",
    slug: "toi-uu-quang-cao-google-ads",
    shortDescription: "Setup chiến dịch, tối ưu CPA, báo cáo hàng tuần",
    description:
      "Tối ưu chiến dịch quảng cáo Google Ads, targeting, tối ưu chi phí trên mỗi chuyển đổi (CPA) và báo cáo tuần.",
    price: 2500000,
    rating: 4.7,
    deliveryDays: 6,
    field: "Marketing",
    country: "Việt Nam",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop",
    gallery: [],
    reviews: []
  }
];
