import React from "react";
import LandingPageContent from "@/features/landing/LandingPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TransHub - Tiên Phong Giải Pháp Logistics Toàn Cầu",
  description: "TransHub - Tập đoàn vận tải đa phương thức và quản trị chuỗi cung ứng hàng đầu thế giới với hơn 25 năm kinh nghiệm.",
};

const RootLandingPage: React.FC = () => {
  return (
    <main>
      {/* Landing page độc lập giới thiệu toàn bộ công ty, không có navbar */}
      <LandingPageContent />
    </main>
  );
};

export default RootLandingPage;